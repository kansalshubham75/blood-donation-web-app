const jwt = require('jsonwebtoken');
const config=require('config');
const jwtSecret = config.get('jwtSecret');
const jwtMiddleware = (req, res, next) => {
    // console.log(req)
    var token = req.headers['x-auth-token'];
    if (!token) {
        res.status(401).json({ msg: 'No token, authorization denied' });
    }else{
        try {
            var decoded = jwt.verify(token,
                jwtSecret);
            req.userid = decoded.userid;
            next();
        } catch (err) {
            res.status(401).json({ msg: 'Invalid Token' });
        }
    }
}

module.exports = jwtMiddleware;