const http = require("http");
const fs = require("fs");
const path = require("path");
var querystring = require('querystring');

const hostname = "localhost";
const port = 3000;

// const server = http.createServer((req, res) => {
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
