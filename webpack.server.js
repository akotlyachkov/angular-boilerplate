const path = require('path');

module.exports = {
    entry: {
        server: './build/compiled/client/app/_server/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: "commonjs"
    },
    target: 'node',
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'build/compiled/client/app')
        ]
    },
    devtool: false,
};
