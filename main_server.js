<<<<<<< HEAD
const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead();
=======
import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {
    const file = fs.readFileSync("./index.html", "utf8");
    const jsFile=fs.readFileSync("./render.js","utf8");
    if (request.method === "GET") {
    
    }
    
});


server.listen(3000, (err) => {
    if (err) {
    console.error(`에러, (${err})가 발생했습니다.`);
    } else {
    console.log("포트 3000으로 연결합니다.");
    }
>>>>>>> c71f5ae0c42ee2ea561437273437e69536d9a2c1
});
