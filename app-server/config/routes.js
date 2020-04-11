const router = require('../routes/');
const utils = require('../utils');
const models = require('../models');
const config = require('../config/config')

module.exports = (app) => {
    app.use('/api/user', router.user);
    app.use('/api/auth', router.auth)
  
    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};