import { createProxyMiddleware } from 'htttp-proxy-middleware'; 

module.exports = function (app) {
    app.use(
        '/api', 
        createProxyMiddleware({
            target: 'http://localhost:5000', 
            changeOrigin: true, 
        })
    )
}