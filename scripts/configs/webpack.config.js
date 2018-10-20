/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // вывод html

const ASSETS_PATH = 'assets'; // путь для сборки всех необходимых ассетов
const BUILD_PATH = '.build';

const CWD = process.cwd(); // текущий путь
const IS_PRODUCTION = (process.env.NODE_ENV === 'production'); // тип сборки

const QUERY = {
    name: '[name].[hash].[ext]'
};

myWebPackConfig = {
    mode: 'development',
    entry: {
        index: './client/index.jsx'
    },
    devtool: 'inline-eval-source-map',
    context: CWD,
    output: {
        path: path.resolve(CWD, BUILD_PATH, ASSETS_PATH),
        publicPath: '',
        filename: IS_PRODUCTION ? '[name].[chunkhash].js' : '[name].js'
    },

    resolve: {
        modules: [
            path.join(process.cwd(), 'node_modules')
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    require.resolve('babel-loader'),
                    require.resolve('ts-loader')
                ]
            },
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),
                exclude: /node_modules/
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'application/font-woff' }, QUERY)
            },
            {
                test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'application/octet-stream' }, QUERY)
            },
            {
                test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: require.resolve('file-loader')
            },
            {
                test: /\.(jpe?g)$/i,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'image/jpeg' }, QUERY)
            },
            {
                test: /\.(gif)$/i,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'image/gif' }, QUERY)
            },
            {
                test: /\.(png)$/i,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'image/png' }, QUERY)
            },
            {
                test: /\.(svg)$/i,
                loader: require.resolve('file-loader'),
                options: Object.assign({ mimetype: 'image/svg+xml' }, QUERY)
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('postcss-loader')
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.HOT_LOADER': process.env.HOT_LOADER
        }),
        new HtmlWebpackPlugin({
            title: 'Мониторинг приложений AO - Альфа Банк'
        })
    ]
}

module.exports = myWebPackConfig;