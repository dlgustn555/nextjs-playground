const http = require("http");

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.end("응답");
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`My App Server is Running ON ${PORT}!!`);
});
