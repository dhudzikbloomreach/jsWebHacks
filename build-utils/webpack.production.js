const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => ({
    devServer: {
        https: true,
        host: 'localhost',
        allowedHosts: 'all',
        static: './scripts',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                sourceMap: false,
                terserOptions: {
                    ecma: 6,
                },
            }),
        ],
    },
});
