import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {
    const file = fs.readFileSync("./index.html", "utf8");
    const jsFile=fs.readFileSync("./render.js","utf8");
    if (request.method === "GET") {
        if(req.url === "/"){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(file);
            res.end();
            
        }
        if(req.url === "/render.js"){
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.write(jsFile);
            res.end();
        }
    }
    if(req.method === "POST"){

    }
});


server.listen(3000, (err) => {
    if (err) {
    console.error(`에러, (${err})가 발생했습니다.`, err);
    } else {
    console.log("포트 3000으로 연결합니다.");
    }
});
