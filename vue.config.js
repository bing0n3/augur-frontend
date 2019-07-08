// vue.config.js
var path = require('path')
module.exports = {
    css: {
      extract: {filename: 'app.css'},
        
    },
    devServer: {
        clientLogLevel: 'error',
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                ws: true
            }
        },
        overlay: {
            warnings: false,
            errors: true
        }
    },
    // pluginOptions: {
    //   'style-resources-loader': {
    //     preProcessor: 'stylus',
    //     patterns: [path.resolve(__dirname, 'src/styles/*.styl'),]
    //   }
    // }
}
