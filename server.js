const express = require('express')

const createServer = () => {
  const app = express();

  app.get('/', (req, res, next) => {
    res.send('前端日志系统')
  })

  app.listen(3000, '0.0.0.0', () => {
    console.log('listening on port 3000')
  })
}


createServer()


process.on('uncaughtException', (err) => {
  createServer()
});
