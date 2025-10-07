const whitelist = require("../config/whitelist");

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (whitelist.indexOf(origin) !== -1) {
    res.setHeader("Access-Control-Allow-Credentials", true);
  }
  next();
};
module.exports = credentials;
// middleware to handle credentials before CORS
// and fetch cookies credentials requirement
// this is needed because the fetch credentials require the header to be set to true
// and the origin must be in the whitelist
// this is to allow cookies to be sent to the server from the client
// without this, the cookies will not be sent
// and the server will not be able to authenticate the user
// because the cookies will not be available in the request
// this is a security feature to prevent CSRF attacks
