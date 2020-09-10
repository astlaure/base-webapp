const config = require('../config/config');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const authenticationMiddleware = (req, res, next) => {
    if (req.isUnauthenticated()) {
        return res.redirect(`${config.base}/login`);
    }
    return next();
};

module.exports = authenticationMiddleware;
