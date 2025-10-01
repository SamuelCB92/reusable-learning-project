const fs = require("fs");
const path = require("path");

/* we can use promises with async/await for cleaner code
const fsPromises = require("fs").promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, "lorem.txt"), "utf8");
    console.log(data);
    await fsPromises.writeFile(path.join(__dirname, "write.txt"), data);
    await fsPromises.appendFile(path.join(__dirname, "write.txt"), "\n\nNice to meet you");
    await fsPromises.rename(path.join(__dirname, "write.txt"), path.join(__dirname, "newWrite.txt"));
    const newData = await fsPromises.readFile(path.join(__dirname, "newWrite.txt"), "utf8");
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
}; */

fs.readFile("lorem.txt", (err, data) => {
  if (err) throw err;
  console.log("File content:", data.toString());
});

//alternatively, we could import the 'path' module to handle file paths
//const path = require("path");
//fs.readFile(path.join(__dirname, "lorem.txt"), (err, data) => { ... });
//__dirname gives the directory of the current file

fs.writeFile(path.join(__dirname, "write.txt"), "New content", (err) => {
  if (err) throw err;
  console.log("File written successfully");
});

fs.appendFile(path.join(__dirname, "test.txt"), "Testing content", (err) => {
  if (err) throw err;
  console.log("Append completed");
});

//since node is asynchronous by nature, if we want to guarantee order of execution, we can put methods inside callbacks
//fs.readFile("lorem.txt", (err, data) => { ... fs.writeFile(..., (err) => { ... fs.appendFile(..., (err) => { ... }) }) })

//we can also use synchronous versions of these methods, but they block the event loop
//const data = fs.readFileSync("lorem.txt");
//fs.writeFileSync("write.txt", "New content");
//fs.appendFileSync("test.txt", "Testing content");
//console.log("Synchronous operations completed");
