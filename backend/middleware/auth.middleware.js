const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodeToken = jwt.verify(token, process.env.SECRET_JWT);
        const monsterId = decodeToken.monsterId;
        if (!token || (req.body.monsterId && req.body.monsterId !== monsterId)) {
            throw 'access refusé';
        } else {
            next();
        }
    } catch (err) {
        res.status(401).json({
            message: 'Token non valide'
        });
    }
}