const path = require('path');

module.exports = {
    entry: {
        server: './client/app/server.module.ts'
        //server: './src/app/server-app.module.ts'
        //server: './src/main.server.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './client/build'),
        libraryTarget: "commonjs"

    },
    target: "node",
    module: {
        rules: [
            {test: /\.ts$/, loader: '@ngtools/webpack',options:{
                tsConfigPath: './server.tsconfig.json'
            }},
            /*{
                 test: /\.js$/,
                 use: ["source-map-loader"],
                 enforce: "pre"
             },*/
            /*{
                test: /\.js$/,
                loaders: ['angular2-template-loader'],
                include: path.join(__dirname, 'client/app'),
            },*/
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            }
        ]
    },
    plugins: [
        /* new webpack.ContextReplacementPlugin(
             /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
             path.join(__dirname, 'client/app')
         )*/
    ],
    resolve: {
        extensions: ['.ts', '.js', '.html'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'client/app')
        ]
    },
    devtool: false//'source-map',
};
