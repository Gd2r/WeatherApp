const path = require("path");

module.exports = {
  entry: "./src/main.js", // Entry point of your app
  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  mode: "development", // Use 'production' for minified output
  module: {
    rules: [
      {
        test: /\.css$/, // Handle CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
