const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { method, url } = req;
  let filePath = null;

  if (method === "GET" && url === "/") {
    filePath = "./index.html";
  } else if (method === "GET" && url === "/about") {
    filePath = "./about.html";
  }

  if (filePath) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

server.listen(8888, () => {
  console.log("Server is running on http://localhost:8888");
});
