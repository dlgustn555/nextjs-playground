import http from 'http'

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('OK!!!')
})

const PORT = 4000

server.listen(PORT, () => {
  console.log('OK')
})
