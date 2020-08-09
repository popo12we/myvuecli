const path = require('path')
const { DllPlugin } = require('webpack')
module.exports = {
  mode: 'development',
  entry: { vue: ['vue', 'vue-router','vuex'] },
  output: {
    path: path.resolve(__dirname, './dll'),
    filename: '[name].dll.js',
    library: 'vue',
  },
  plugins: [
    new DllPlugin({
      // manifest.json⽂文件的输出位置
      path: path.join(__dirname, './dll', '[name]-manifest.json'),
      // 定义打包的公共vendor⽂文件对外暴暴露露的函数名
      name: 'vue',
    }),
  ],
}
