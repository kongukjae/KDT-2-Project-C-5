const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile("sign.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.method === "POST" && req.url === "/register") {
    // POST 요청으로 "/register" 경로에 접근할 경우 회원정보를 받아서 처리
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const userInfo = JSON.parse(body);
      // 받아온 회원정보를 처리하는 로직을 작성
      // ...
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "회원가입이 완료되었습니다." }));
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
