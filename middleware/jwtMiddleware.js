const jwt = require('jsonwebtoken');
const jwtsecret = require('../config/jwt');
const jwtMiddleware = (req, res, next) => {
    var token = req.headers['x-auth-token'];
    if (!token) {
        res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        var decoded = jwt.verify(token,
            jwtsecret);
        req.userid = decoded.userid;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Invalid Token' });
    }
}

module.exports = jwtMiddleware;