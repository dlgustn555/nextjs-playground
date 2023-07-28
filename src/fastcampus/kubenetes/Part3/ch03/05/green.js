const http = require("http");

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      status: "OK",
      version: process.env.VERSION,
      podIp: process.env.POD_IP,
    })
  );
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Green Server is Running ON ${PORT}..`);
});
