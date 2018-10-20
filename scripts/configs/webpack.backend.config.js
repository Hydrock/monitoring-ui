/* eslint import/no-extraneous-dependencies: 0 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const BUILD_PATH = '.build';
const IS_PRODUCTION = (process.env.NODE_ENV === 'production');
// const ARUI_TEMPLATE = require('arui-presets/webpack.base');
// const ARUI_TS_TEMPLATE = require('arui-presets-ts/webpack');

const QUERY = {
    name: '[name].[hash].[ext]'
};

const CWD = process.cwd();

// const webpackConfig = merge.smart(
//     ARUI_TEMPLATE,
//     ARUI_TS_TEMPLATE,
//     {
//         target: 'node',
//         node: {
//             __filename: true,
//             __dirname: true
//         },
//         devtool: IS_PRODUCTION ? 'source-map' : 'inline-source-map',
//         entry: ['./server/index.ts'],
//         context: CWD,
//         output: {
//             path: path.resolve(CWD, BUILD_PATH),
//             filename: 'server.js'
//         },
//         externals: [nodeExternals()],
//         plugins: [
//             new webpack.NormalModuleReplacementPlugin(/\.css$/, 'node-noop'),
//             new webpack.BannerPlugin({
//                 banner: 'require("source-map-support").install();',
//                 raw: true,
//                 entryOnly: false
//             })
//         ]
//     }
// );

const selfWebpackConfig = {
    mode: 'development',
    target: 'node',
    node: {
        __filename: true,
        __dirname: true
    },
    devtool: IS_PRODUCTION ? 'source-map' : 'inline-source-map',
    entry: ['./server/index.js'],
    context: CWD,
    output: {
        path: path.resolve(CWD, BUILD_PATH),
        filename: 'server.js'
    },
    externals: [nodeExternals()],
    resolve: {
        modules: [
            path.join(process.cwd(), 'node_modules')
        ],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
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
            }
        ]
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/\.css$/, 'node-noop'),
        new webpack.BannerPlugin({
            banner: 'require("source-map-support").install();',
            raw: true,
            entryOnly: false
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.HOT_LOADER': process.env.HOT_LOADER
        })
    ]
}

module.exports = selfWebpackConfig;
