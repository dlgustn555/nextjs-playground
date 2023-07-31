const http = require("http");

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      server: "Order Server",
      podIp: process.env.POD_IP,
      hostIp: process.env.HOST_IP,
    })
  );
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`😍😍😍 Order Server Is Running On ${PORT}!! 😍😍😍\n\n`);
});
