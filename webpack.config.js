const webpack = require('webpack');
const merge = require('webpack-merge');
let webpackConfig = {};

const baseWebpackConfig = {
    entry: './dev/index.js',
    output: {
        path: './dist',
        filename: 'build.js',
    },
    module: {
        loaders: [
            // 转化es6语法
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_module/,
            },
            // 解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue',
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass',
            },

        ],
    },

    // .vue的配置。需要单独出来配置
    vue: {
        loaders: {
            scss: 'style!css!sass',

        },
    },
    resolve: {
         // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            vue$: 'vue/dist/vue.common.js',
        },
    },
};

if (process.env.NODE_ENV === 'development') {
    webpackConfig = merge(baseWebpackConfig, {
        devtool: 'eval-source-map', // 'source-map',
        devServer: {
            contentBase: './dev', // 将dev文件夹设置为本地服务器
            port: 3000,
        },
    });
}
module.exports = webpackConfig;
