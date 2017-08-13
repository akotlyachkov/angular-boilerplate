const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        server: './client/app/_server/aot.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './client/build')
    },
    target: 'node',
    resolve: {
        extensions: ['.js', '.html'],
        modules: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../client/app')
        ]
    },
    devtool: false,
};
