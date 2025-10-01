const fs = require("fs");

//createReadStream and createWriteStream are used for handling large files efficiently
const rs = fs.createReadStream("lorem.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("write.txt", { encoding: "utf8" });

// on is a listener method to handle events
/* rs.on("data", (chunk) => {
  console.log("New chunk received:");
  console.log(chunk);
  ws.write(chunk);
});

rs.on("error", (err) => {
  console.error("Error reading file:", err);
}); */

// pipe method connects a readable stream to a writable stream, automatically handling data flow
//rs.pipe(ws);
