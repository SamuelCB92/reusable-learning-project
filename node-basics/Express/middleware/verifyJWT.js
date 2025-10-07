const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader) {
    console.log("No auth header");
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" }); //invalid token
    }
    req.user = decoded.username;
    next();
  });
};

module.exports = verifyJWT;
// File: node-basics/Express/routes/api/employees.js
// --- a/file:///d%3A/Programming/random-projects/learning-project/reusable-learning-project/node-basics/Express/routes/api/employees.js
// +++ b/file:///d%3A/Programming/random-projects/learning-project/reusable-learning-project/node-basics/Express/routes/api/employees.js
