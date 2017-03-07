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
        new webpack.HotModuleReplacementPlugin(), // 开启全局的模块热替换（HMR）
        new webpack.NamedModulesPlugin(), // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
    ],
});
