const http = require("http");

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      nodeName: process.env.NODE_NAME,
      hostIp: process.env.HOST_IP,
      podIp: process.env.POD_IP,
    })
  );
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is Running ON :${PORT}.`);
});
