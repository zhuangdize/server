const express = require('express')

const createServer = () => {
  const app = express();

  app.get('/', (req, res, next) => {
    var ipStr = req.headers['X-Real-IP'] || req.headers['x-forwarded-for'];
    res.send(ipStr)
  })

  app.listen(3000, '0.0.0.0', () => {
    console.log('listening on port 3000')
  })
}


createServer()


process.on('uncaughtException', (err) => {
  createServer()
});
