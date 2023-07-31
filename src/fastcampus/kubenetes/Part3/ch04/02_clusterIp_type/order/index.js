const http = require("http");

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify("ORDER SERVER"));
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Order Server Is Running ON ${PORT}.`);
});
