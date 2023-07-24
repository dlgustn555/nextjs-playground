const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello')
})

const PORT = 6000
server.listen(PORT, () => {
  console.log('Server Listiening ', PORT)
})
