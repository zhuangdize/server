const express = require('express')

const createServer = () => {
  const app = express();
  
  app.set('trust proxy', function (ip) {
  if (ip === '127.0.0.1' || ip === '123.123.123.123') return true // trusted IPs
  else return false
})

  app.get('/', (req, res, next) => {
    var ipStr = req.headers['X-Real-IP'] || req.headers['x-forwarded-for'];
    var ip = req.ip;
 
    res.send({
      data: {
         ip1: ipStr,
         ip2: ip
      }
    })
  })

  app.listen(3000, '0.0.0.0', () => {
    console.log('listening on port 3000')
  })
}


createServer()


process.on('uncaughtException', (err) => {
  createServer()
});
