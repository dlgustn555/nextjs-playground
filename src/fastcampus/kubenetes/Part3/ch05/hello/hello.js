import http from "http";
import { PORT } from "../PORT.js";

console.log(PORT);

const SERVER_NAME = "HELLO";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify(`${SERVER_NAME} 서버 응답!!`));
});

server.listen(PORT[SERVER_NAME], () => {
  console.log(`${SERVER_NAME} Server is Running ON `, PORT.SKY);
});
