/* eslint import/no-extraneous-dependencies: 0 */
/* eslint no-console: 0 */
Error.stackTraceLimit = 30; // лимит вывода стека ошибок

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../configs/webpack.config.js');

const PORT = 3000;

// webpackConfig.entry = Object.keys(webpackConfig.entry).reduce((result, item) => {
//     console.log('result, item', result, item)
//     result[item] = [
//         'webpack/hot/dev-server',
//         `webpack-dev-server/client?http://localhost:3000`,
//         'react-hot-loader/patch'
//     ];

//     result[item] = result[item].concat(webpackConfig.entry[item]);

//     return result;
// }, {});

//webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

const frontendCompiler = webpack(webpackConfig);

const frontendServer = new WebpackDevServer(frontendCompiler, {
    contentBase: webpackConfig.output.path,
    hot: true,
    quiet: false,
    noInfo: false,
    inline: true,
    lazy: false,
    overlay: true,
    filename: webpackConfig.output.filename,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    proxy: {
        '/api': 'http://localhost:3001'
    },
    publicPath: webpackConfig.output.publicPath,
    disableHostCheck: true,
    stats: { colors: true },
    headers: {
        'X-Custom-Header': 'yes',
        'Access-Control-Allow-Origin': '*'
    }
});

frontendServer.listen(PORT, '0.0.0.0', () => {
    console.log(`Frontend server running at http://localhost:${PORT}...`);
});