const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy(
      [
        '/home',
        '/about',
        '/projects'
      ], { taget: 'https://localhost:3001', changeOrigin: true }
    )
  )
}