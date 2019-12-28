const config = require('config');
const jwt = require('jsonwebtoken');

/**
 * @function auth it allwos to autheticate 
 * @param {any} req it provides us the info
 * @param {any} res 
 * @param {any} next 
 * it checks for tokens 
 * and then verify them
 * and finally add user from payload
 */
function auth(req, res, next) {
    const token = req.header('x-auth-token');

    // Check for token
    if (!token)
        return res.status(401).json({ msg: 'No token, authorizaton denied' });

    try {
        // Verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = auth;