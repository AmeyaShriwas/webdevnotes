// webpack.config.js
const path = require('path');

module.exports = {
  // Entry point for your bundle
  entry: './src/index.js',
  
  // Output configuration for bundled files
  output: {
    filename: 'bundle.js', // The name of the bundled JavaScript file
    path: path.resolve(__dirname, 'dist'), // Directory where files will be output
  },

  // Define rules for how different file types will be processed
  module: {
    rules: [
      {
        test: /\.css$/, // Regular expression for matching CSS files
        use: ['style-loader', 'css-loader'], // Loaders to process CSS
      },
    ],
  },

  // Enable source maps for easier debugging
  devtool: 'source-map',
};
