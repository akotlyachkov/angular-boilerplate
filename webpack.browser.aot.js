const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        browser: './client/app/_browser/aot.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'client/build')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false}
        })
    ],
    resolve: {
        extensions: ['.js', '.html'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'client/app')
        ]
    },
    devtool: false,
};
