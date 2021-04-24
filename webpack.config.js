// ["@babel/plugin-proposal-optional-chaining"] plugin is probably no longer needed, because it is included in @babel/preset-env
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

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

// output is main.js by default, but we can change it. We can put a hash to make it unique if we need to cache it or whatever
// we can treat module.exports as an object or as a function
// module.exports = {
//   output: {
//     filename: "main.[hash].js"
//   },
//   module: {
//     rules: [javascriptRules],
//   },
//   plugins: [
//       new HTMLWebpackPlugin({
//           title: 'React Webpack Config',
//           template: './src/index.html'
//       })
//   ]
// };

const developmentPlugins = []
const productionPlugins = [
  new CompressionPlugin()
]

module.exports = (env, {mode}) => ({
    output: {
      filename: "main.[hash].js"
    },
    module: {
      rules: [javascriptRules],
    },
    plugins: [
      ...(mode === 'production' ? productionPlugins : developmentPlugins),
      new HTMLWebpackPlugin({
        title: 'React Webpack Config',
        template: './src/index.html'
      })
    ].filter(Boolean)
  });