const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      version: "1.0.0",
      page: "green",
      podIp: process.env.POD_IP,
      podName: process.env.POD_NAME,
      nodeName: process.env.NODE_NAME,
      namespace: process.env.NAMESPACE,
    })
  );
});

const PORT = 3302;

server.listen(PORT, () => {
  console.log("Server is Running ON PORT: ", PORT);
});
