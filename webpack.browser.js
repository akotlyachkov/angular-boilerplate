const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        browser: './build/compiled/client/app/_browser/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules|ngfactory/,
                use: ["source-map-loader"],
                enforce: "pre"
            }]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'build/compiled/client/app')
        ]
    },
    devtool: 'source-map',
};
