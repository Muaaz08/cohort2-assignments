const fs = require("fs");

const currentDirectory = process.cwd();
console.log("Current directory:", currentDirectory);

console.log("__dirname:", __dirname);

let content = "adding content from js code";

fs.writeFile(__dirname + "/writeFile.txt", content, (err) => {
  if (err) {
    console.error(err);
    // return;
  } else {
    console.log("file write completed!");
  }
});
