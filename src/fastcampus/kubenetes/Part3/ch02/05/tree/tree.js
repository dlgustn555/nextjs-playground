const http = require("http");

const SERVER_NAME = "TREE";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify(`${SERVER_NAME} 서버 응답!!`));
});

const PORT = 8081;

server.listen(PORT, () => {
  console.log(`${SERVER_NAME} Server is Running ON `, PORT);
});
