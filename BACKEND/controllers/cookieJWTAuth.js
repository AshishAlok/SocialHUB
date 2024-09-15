const jwt = require("jsonwebtoken");


const jwtAuthUsers = (req, res, next) => {
    // Get the JWT token from the request header
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }
  
    // Verify the JWT token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }
  
      // If token is valid, set the user ID in the request object and proceed to the next middleware
      req.email = decoded.id;
      next();
    });
  };
  
  module.exports = {
    jwtAuthUsers
  };