// ["@babel/plugin-proposal-optional-chaining"] plugin is probably no longer needed, because it is included in @babel/preset-env
const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react", "@babel/preset-env"],
      plugins: ["@babel/plugin-proposal-optional-chaining"],
    },
  },
};

module.exports = {
// output is main.js by default, but we can change it. We can put a hash to make it unique if we need to cache it or whatever
//   output: {
//     filename: "another.[contentHash].js"
//   },
  module: {
    rules: [javascriptRules],
  },
};
