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
});
