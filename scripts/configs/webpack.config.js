/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge'); // плагин для конкатенации конфиглв
const HtmlWebpackPlugin = require('html-webpack-plugin'); // вывод html

const ASSETS_PATH = 'assets'; // путь для сборки всех необходимых ассетов
const BUILD_PATH = '.build';

const ARUI_TEMPLATE = require('arui-presets/webpack.base'); // базовый темплейт
const ARUI_TS_TEMPLATE = require('arui-presets-ts/webpack'); // темплейт для обработки TS
const ARUI_DEV_TEMPLATE = require('arui-presets/webpack.development'); // тшаблон конфига для дев разработки
const aruiProdConfigBuilder = require('arui-presets/webpack.production-builder'); // билдер конфига для прода

const CWD = process.cwd(); // текущий путь
const IS_PRODUCTION = (process.env.NODE_ENV === 'production'); // тип сборки
const ARUI_PROD_TEMPLATE = aruiProdConfigBuilder({ extractOptions: { publicPath: './' } }); // шаблон конфига для протакшена

const QUERY = {
    name: '[name].[hash].[ext]'
};

// let webpackConfig = merge.smart(
//     ARUI_TEMPLATE,
//     ARUI_TS_TEMPLATE,
//     {
//         entry: {
//             index: './client/index.jsx'
//         },
//         context: CWD,
//         output: {
//             path: path.resolve(CWD, BUILD_PATH, ASSETS_PATH),
//             publicPath: '',
//             filename: IS_PRODUCTION ? '[name].[chunkhash].js' : '[name].js'
//         },
//         plugins: [
//             new HtmlWebpackPlugin({
//                 title: 'Мониторинг приложений AO - Альфа Банк'
//             })
//         ]
//     },
//     IS_PRODUCTION ? ARUI_PROD_TEMPLATE : ARUI_DEV_TEMPLATE
// );


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