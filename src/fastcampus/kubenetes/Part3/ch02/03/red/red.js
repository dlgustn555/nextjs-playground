const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      version: "1.0.0",
      page: "red",
      nodeName: process.env.NODE_NAME,
      hostIp: process.env.HOST_IP,
      podIp: process.env.POD_IP,
      podName: process.env.POD_NAME,
      namespace: process.env.NAMESPACE,
    })
  );
});

const PORT = 3303;

server.listen(PORT, () => {
  console.log("Server is Running ON PORT: ", PORT);
});
