const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      hostIp: process.env.HOST_IP,
      podIp: process.env.POD_IP,
      podName: process.env.POD_NAME,
      nodeName: process.env.NODE_NAME,
    })
  );
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Blue Server Is Running ON ${PORT}`);
});
