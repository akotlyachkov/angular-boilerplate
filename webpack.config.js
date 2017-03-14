const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: './client/app/index.ts',
        libs: './client/app/libs.ts',
        angular: './client/app/angular.ts',
        styles: './client/app/styles.ts'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './client/build')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        transpileOnly: true
                    }
                }, 'angular2-template-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                //loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
                loaders: [{
                    loader: 'css-loader',
                    options: {minimize: true}
                }, 'sass-loader'],
            },
            {
                test: /\.woff$/,
                loader: 'base64-font-loader',//?name=assets/[name].[hash].[ext]

            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
           path.join(__dirname,'client/app')
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: [
                'common',
                'app',
                'libs',
                'angular',
                'styles'
            ]
        })
    ],
    resolve: {
        extensions: ['.ts', '.scss', '.html', '.js', '.css', '.woff']
    },
    //devtool: 'inline-source-map',
};