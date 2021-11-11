import { createProxyMiddleware } from 'http-proxy-middleware'
module.exports = function (app) {
    app.use(
        '/api1',
        // "proxy": "http://localhost:5000"
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}
