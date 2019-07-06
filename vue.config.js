// vue.config.js
var path = require('path')
module.exports = {
    chainWebpack: config => {
      const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
      types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
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

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/augur.styl'),
      ],
    })
}