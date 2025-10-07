const whitelist = require("./whitelist");

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // !origin allows server-to-server or curl/postman requests without origin header, or in other words, non-browser requests
      //if we look at eventlog.txt, we can see that requests from Postman or curl have 'undefined' as the origin
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = corsOptions;
