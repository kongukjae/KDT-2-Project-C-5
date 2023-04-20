const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/") {
    fs.readFile(path.join(__dirname, "signup.html"), "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end();
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}/`);
});
