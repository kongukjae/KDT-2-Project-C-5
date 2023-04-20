import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {
    const file = fs.readFileSync("./index.html", "utf8");
    const jsFile=fs.readFileSync("./render.js","utf8");
    const webpack= fs.readFileSync("./dist/main.js", "utf8");
    if (request.method === "GET") {
        if(request.url === "/"){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(file);
            response.end();
            
        }
        if(request.url === "/main.js"){
            response.writeHead(200, {'Content-Type':'text/javascript'});
            response.write(webpack);
            response.end();
        }
    }
    if(request.method === "POST"){

    }
});


server.listen(3000, (err) => {
    if (err) {
    console.error(`에러, (${err})가 발생했습니다.`, err);
    } else {
    console.log("포트 3000으로 연결합니다.");
    }
});
