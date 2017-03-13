const webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: {
        app: './client/app/index.ts',
        vendors: './client/app/vendors.ts'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './client/build')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader','angular2-template-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                //loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
                loaders: ['raw-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins:[
new ExtractTextPlugin('testik.css'),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendors']
        })
    ],
    resolve: {
        extensions: ['.ts','.scss','.html','.js','.css']
    },
    devtool: 'inline-source-map',
};