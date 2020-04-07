const router = require('../routes/');
const utils = require('../utils');
const models = require('../models');
const config = require('../config/config')

module.exports = (app) => {
/* 
     app.get('/api/auth', (req, res) => {
         console.log('auth')
        const token = req.cookies[config.authCookieName];
        utils.jwt.verifyToken(token)
            .then(({ id }) => models.User.findById(id))
            .then(user => res.send(user))
            .catch(() => res.status(401).send('HELLO'))
    }) */ 
    app.use('/api/user', router.user);
    app.use('/api/auth', router.auth)
  
    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};