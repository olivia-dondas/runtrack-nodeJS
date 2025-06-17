const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === "GET" && url === "/") {
    const filePath = "./index.html";
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(8888, () => {
  console.log("Server is running on http://localhost:8888");
});
