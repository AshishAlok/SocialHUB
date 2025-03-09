const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwtConfig");

const verifyToken = (req, res, next) => {
    const token = req.cookies.token || req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token, secret);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

module.exports = verifyToken;
