const whitelist = ["https://www.google.com", "http://localhost:3500"];

module.exports = whitelist;
// list of allowed origins for CORS, can remove localhost in production but need to add your frontend domain(and any variations like www/non-www/http/https)
//create the function to check if the origin is in the whitelist
//to fully explain the syntax, origin is the origin of the request, callback is a function to call with the result
//-1 means not found in the array(not whitelisted). indexOf returns the index of the item in the array, or -1 if not found
// callback takes two arguments, the first is an error(if any), the second is a boolean indicating if the request is allowed
