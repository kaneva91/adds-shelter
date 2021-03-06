const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        const id = req.params.id;
        models.User.find({ _id: id })
            .then(data => {
                const { _id, username, firstName, lastName, email } = data[0]; 
                userDetails = { _id: id, username, firstName, lastName, email };
                return userDetails;
            })
            .then((user) => res.send(user))
            .catch(next)
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { firstName, lastName, email } = req.body;
        const query = { firstName, lastName, email }
        models.User.findOneAndUpdate({ _id: id }, query, { new: true })
            .then((response) => {
                const { _id, firstName, lastName, email } = response;
                const id = _id
                const updatedUser = { id, firstName, lastName, email };
                res.send(updatedUser)
            })
            .catch(err => console.log(err))
    },


    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => {
                models.Ad.deleteMany({ creatorId: id }).then(a => console.log(a))
                res.send(removedUser)
            })
            .catch(next)
    },

    post: {
        register: (req, res, next) => {
            const { firstName, lastName, email, password } = req.body;
            models.User.create({ email, firstName, lastName, password })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
        },

        login: (req, res, next) => {
            const { email, password } = req.body;
            models.User.findOne({ email })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }
                    const token = utils.jwt.createToken({ id: user._id });
                    const { email, firstName, lastName, _id } = user;
                    const currentUser = { _id, email, firstName, lastName };
                    res.cookie(config.authCookieName, token).send(currentUser);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            console.log('LOGOUT')
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send({ logoutSuccess: true });
                })
                .catch(next);
        },
    }

};