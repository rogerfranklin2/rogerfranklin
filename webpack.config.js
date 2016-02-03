module.exports = {
  entry: "./src/js/main",
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.sass$/, loader: "style!css!sass?indentedSyntax"},
      { test: /\.jpg$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
