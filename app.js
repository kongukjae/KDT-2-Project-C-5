<<<<<<< HEAD
const http = require("http");
const fs = require("fs");
const path = require("path");
var querystring = require('querystring');
=======
// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const html = require("./signup");
>>>>>>> 1bdb09279e8686b5336ed1782a78390e98943ba0

// const PORT = 3001;

// const server = http.createServer((req, res) => {
<<<<<<< HEAD
//   if (req.method === "POST" && req.url === "/") {
//     fs.readFile(path.join(__dirname, "signup.html"), "utf8", (err, data) => {
//       if (err) {
//         console.error(err);
//         res.statusCode = 500;
//         res.end();
//         return;
//       }

//       res.statusCode = 200;
//       res.setHeader("Content-Type", "text/html");
//       res.write(data);
//       res.end();
//     });
//   } else {
//     res.statusCode = 404;
//     res.end();
//   }
// });

const server = http.createServer((req, res) => {
  req.on("error", (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  res.on("error", (err) => {
    console.error(err);
  });
  if (req.method === "POST" && req.url === "/") {
    fs.readFile(path.join(__dirname, 'signup.html'), (err, data) => {

        if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
  }
  
});







server.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}/`);
});
=======
//   // 루트 페이지 설정
//   // if (req.url === "/" || req.url === "/signup.html") {
//   if (req.url === "/") {
//     // const filePath = path.join(__dirname, "signup.html");
//     // fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("500 - Internal Server Error");
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(html);
//     }
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 - Not Found");
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// const http = require("http");
// const path = require("path");
// const fs = require("fs");
// const html = require("./signup");

// const server = http.createServer((req, res) => {
//   const { url, method } = req;
//   if (url === "/signup" && method === "GET") {
//     if (err) {
//       res.writeHead(500);
//       res.end("Error loading signup.html");
//     } else {
//       res.writeHead(200, {
//         "Content-Type": "text/html",
//       });
//       res.end(html);
//     }
//   }
// });

// server.listen(3001, () => {
//   console.log("Server is listening on port 3001");
// });

//html 모듈 받아오기
var http = require("http");
const html = require("./signup");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "html" });
    res.write(html);
    res.end();
  })
  .listen(3001);
>>>>>>> 1bdb09279e8686b5336ed1782a78390e98943ba0
