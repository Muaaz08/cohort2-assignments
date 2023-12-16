const fs = require("fs");

const fileDir = __dirname + "/fileCleaner.txt";

let originalContent = "";
let updatedContent = "";

fs.readFile(fileDir, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  originalContent = data;
  console.log({ originalContent });

  updatedContent = originalContent.replace(/\s+/g, " ");

  writeFileFS(updatedContent);
});

function writeFileFS(updatedContent) {
  fs.writeFile(fileDir, updatedContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File write completed!");
  });
}
