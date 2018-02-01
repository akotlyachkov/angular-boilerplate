let path = require('path'),
    ngtools = require('@ngtools/webpack');

module.exports = {
    entry: {
        server: './client/app/_server/index.ts'
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: "commonjs"
    },

    plugins: [
        new ngtools.AngularCompilerPlugin({
            tsConfigPath: __dirname+'/tsconfig.debug.json',
            entryModule: __dirname+'/client/app/_server/module#ServerAppModule',
            sourceMap: false
        })
    ],
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'market/client/app')
        ]
    },
    target: 'node',
    devtool: false
};