const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '^/api/': {
        target: 'http://localhost:8888',
        changeOrigin: true,
      }
    }
  },
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
          path.resolve(__dirname, './src/less/*.less')
      ]
    }
  },
}
