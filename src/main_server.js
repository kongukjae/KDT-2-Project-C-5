import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {
    const file = fs.readFileSync("./index.html", "utf8");
    if (request.method === "GET") {
        response.end("../dist/main.js");
    }
    
});


server.listen(3000, (err) => {
    if (err) {
    console.error(`에러, (${err})가 발생했습니다.`);
    } else {
    console.log("포트 3000으로 연결합니다.");
    }
});




















