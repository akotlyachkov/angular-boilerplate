const path = require('path');

module.exports = {
    entry: {
        //server: './client/index.js'
        //server: './client/app/server.module.js'
        server: './client/test.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './client/build'),
        libraryTarget: "commonjs"

    },
    target: "node",
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
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'client/app')
        ]
    },
    devtool: false
};
