// entry point
// output file

const path = require("path");

// Local directory + public folder.
//console.log(path.join(__dirname, "public"));

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  }
};