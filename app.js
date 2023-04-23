const http = require("http");

const hostname = "127.0.0.1";

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Toni Margo");
  })
  .listen(8080, hostname, () => {
    console.log(`Server running at http://${hostname}:8080/`);
  });
