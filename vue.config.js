'use strict'
const path = require('path');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  publicPath: '/', // 编译文件路径
  outputDir: 'dist', // 编译文件夹
  assetsDir: 'static', // 编译完成静态资源文件
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径
  devServer: {
    open: false,
    port: 8866,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:8866/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  }
}
