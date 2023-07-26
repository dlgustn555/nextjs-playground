const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      podIp: "10.23.424.100",
    })
  );
});

const PORT = 3300;

server.listen(PORT, () => {
  console.log("Server is Running ON PORT: ", PORT);
});
