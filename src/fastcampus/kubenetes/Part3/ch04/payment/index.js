const http = require("http");

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify("Payment Server"));
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Payment Server Is Running ON ${PORT}.`);
});
