const path = require('path');

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

module.exports = {
    entry: {
        client: resolve('../app/index.js'),
    },
    output: {
        path: resolve('../dist'),
        filename: '[name].[hash:4].js',
        chunkFilename: 'chunks/[name].[hash:4].js',
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@app': path.join(__dirname, '../app'),
        },
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    module: {
        rules: [{
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                include: [resolve('../app')],
                loader: 'happypack/loader?id=happyBabel',
            },
            {
                test: /\.(css|less)$/,
                // exclude: /node_modules/,
                include: [
                    resolve('../app/styles'),
                    resolve('../app/components')
                ],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style',
                    use: 'happypack/loader?id=happyStyle'
                }),
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: /node_modules/,
                include: [resolve('../app/images')],
                loader: 'url',
                options: {
                    limit: 8192,
                    name: 'img/[name].[hash:4].[ext]'
                }
            },
            {
                test: /\.(woff|eot|ttf|svg|gif)$/,
                loader: 'url',
                options: {
                    limit: 8192,
                    name: 'font/[name].[hash:4].[ext]'
                }
            },
        ]
    },
    plugins: [
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'happyBabel',
            //如何处理  用法和loader 的配置一样
            loaders: [{
                loader: 'babel?cacheDirectory=true',
            }],
            //代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: true,
        }),
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'happyStyle',
            //如何处理  用法和loader 的配置一样
            loaders: ['css-loader?sourceMap=true', 'less-loader?sourceMap=true'],
            //代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: true,
        }),
        // 提取css
        new ExtractTextPlugin('style.[hash:4].css')
    ],
    optimization: {
        splitChunks: {
            name: "commons",
            filename: 'common.[hash:4].js',
            // minChunks: function (module, count) {
            //     return module.resource &&
            //         /\.js$/.test(module.resource) &&
            //         module.resource.indexOf(resolve('../node_modules')) === 0
            // }
        }
    }
};