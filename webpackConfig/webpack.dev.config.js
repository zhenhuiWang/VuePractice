const merge = require('webpack-merge');
const webpack = require('webpack');

const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dev', // 将dev文件夹设置为本地服务器
        host: '0.0.0.0',
        open: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
