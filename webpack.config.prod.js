import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'source-map', //CHANGE HERE FROM INLINE TO JUST SOURCE MAP
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), //dist = distribution
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
