const serve = require('webpack-serve');
const config = require('./webpack.config.js');

serve({
  config,
  content: ['./public'],
  hot: {
    hot: true,
    reload: true
  }
});
