const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        browser: './client/app/_browser/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'client/build')
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
    /*plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false}
        })
    ],*/
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'client/app')
        ]
    },
    devtool: 'source-map',
};
