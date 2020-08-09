const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        // 压缩HTML⽂文件
        removeComments: true,
        // 移除HTML中的注释
        collapseWhitespace: true,
        // 删除空⽩白符与换⾏行行符
        minifyCSS: true,
        // 压缩内联css
      },
    }),
    new DllReferencePlugin({
      manifest: path.resolve(__dirname, './dll/vue-manifest.json'),
    }),

    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // 预设： 表示指定哪些版本的语法要进行编译
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      // 所有的 chunks 代码公共的部分分离出来成为⼀一个单独的⽂文件
      chunks: 'all',
    },
  },
}
