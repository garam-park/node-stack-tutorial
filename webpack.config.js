module.exports = {
  entry : "./public/js/app.js",
  output : {
    path : __dirname + "/public",
    filename : "bundle.js"
  },
  module : {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
