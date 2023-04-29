import http from "http";
import fs from "fs";

const html = fs.readFileSync("../dist/index.html");
const js = fs.readFileSync("../dist/main.js");
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
  if (res.url == "main.js") {
    res.end(js);
  }
});

server.listen(3000, () => {
  console.log("서버 열림");
});
