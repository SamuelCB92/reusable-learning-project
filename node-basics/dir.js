const fs = require("fs");

if (!fs.existsSync("new")) {
  fs.mkdir("new", (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
}

if (fs.existsSync("new")) {
  fs.rmdir("new", (err) => {
    if (err) throw err;
    console.log("Directory removed");
  });
}
//fs.rmdir only works on empty directories. To remove non-empty directories, use fs.rm with { recursive: true }
//fs.rm("new", { recursive: true }, (err) => { ... });
