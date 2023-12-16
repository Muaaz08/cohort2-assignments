const fs = require("fs");

//Note: Current directory in node depends upon where the execution of node process is done at.
// For example: if node is called from easy is directory it will get the test.txt file
// and if the node is called from parent folder (i.e., 01-async.js) then you need to add dir + filename like easy/test.txt

const currentDirectory = process.cwd();
console.log("Current directory:", currentDirectory);

console.log("__dirname:", __dirname);

fs.readFile(__dirname + "/test.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log(data);
});
