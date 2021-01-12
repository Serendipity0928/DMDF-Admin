const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title // 网址标题
const port = 8928 // 端口配置

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,   //不需要生产环境source map
  devServer: {
    port: port,
    open: true,
    hot:true,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true
    },
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
  },
}