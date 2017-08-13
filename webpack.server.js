const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        server: './client/app/_server/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'client/build')
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                loaders: ['angular2-template-loader'],
                include: path.join(__dirname, 'client/app'),
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            }
        ]
    },
    target: 'node',


    resolve: {
        extensions: ['.js', '.html'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'client/app')
        ]

    },
    devtool: false//'source-map',
};
