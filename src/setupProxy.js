const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/create_checkout',
    createProxyMiddleware({
      target: 'http://localhost:3500',
      changeOrigin: true,
    })
  );
};