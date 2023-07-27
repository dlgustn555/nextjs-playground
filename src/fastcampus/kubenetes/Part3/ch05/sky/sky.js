import http from "http";
import { PORT } from "../PORT";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify("SKY 서버 응답!!"));
});

server.listen(PORT.SKY, () => {
  console.log("SKY Server is Running ON ", PORT.SKY);
});
