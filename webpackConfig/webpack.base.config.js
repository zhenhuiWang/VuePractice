const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const postcssConfig = require('./postcss.config.js');
const jsFiles = glob.sync('./dev/scripts/*.js');
const entry = {};
jsFiles.forEach((file, i) => {
    entry[path.basename(file, '.js')] = file;
});

module.exports = {
    entry, // 多个入口文件用对象传入,每个html文档使用一个入口起点
    output: {
        path: path.join(process.cwd(), 'dist'), // 需要传入一个绝对路径，current working dictory
        filename: '[name].js',  // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
    },
    module: {
        rules: [
            // 转化es6语法
            {
                test: /\.js(x)?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_module/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 1024,
                        name: 'font/[name].[ext]',
                    },
                }],
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        mimetype: 'image/png',
                    },
                }],
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ],
            },

        ],
    },

    resolve: {
         // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            vue$: 'vue/dist/vue.js',
        },
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: postcssConfig.plugins,
                vue: {
                    postcss: postcssConfig.plugins,
                    loaders: {
                        sass: 'style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax',
                        scss: 'style-loader!css-loader!postcss-loader!sass-loader',
                    },
                    cssModules: {
                        localIdentName: '[path][name]---[local]---[hash:base64:5]',
                        camelCase: true,
                    },
                },
            },
        }),
    ],
};
