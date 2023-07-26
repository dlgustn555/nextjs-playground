const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      version: "1.0.0",
      podIp: process.env.POD_IP,
    })
  );
});

const PORT = 3300;

server.listen(PORT, () => {
  console.log("Server is Running ON PORT: ", PORT);
});
