const path = require('path');

module.exports = {
    entry: {
        server: './client/app/_server/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'client/build'),
        libraryTarget: "commonjs"
    },
    target: 'node',
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'client/app')
        ]
    },
    devtool: false,
};
