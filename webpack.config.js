// Local directory + public folder.
//console.log(path.join(__dirname, "public"));

const path = require("path");

// entry/output - Creates bundle file, converting app.js and all dependencies into 1 bundle.js file.
// module - Allows babel to convert .js files into the presets we define in .babelrc. 
// devtool - Shows original JS files rather than bundle.js when debugging.
// test: // $ means .scss should be at the end of the file. ? makes the s optional so we can render css files aswell.

module.exports = { 
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: { 
    rules: [{
      loader: "babel-loader",
      test: /\.js$/,
      exclude: /node_modules/ 
    }, {
      test: /\.s?css$/, 
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  devtool: "cheap-module-eval-source-map", 
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};