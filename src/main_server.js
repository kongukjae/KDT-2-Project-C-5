import http from 'http';
import fs from 'fs';

const server = http.createServer((req,res)=>{
  if(req.method === "GET"){
    if(req.url === "/"){
      res.writeHead(200, {"Content-Type":"text/html"})
      res.write(fs.readFileSync("../src/index.html", "utf8"));
      res.end();
    }
    if(req.url === "/startPage.js"){
      res.writeHead(200, {"Content-Type":"text/javascript"})
      res.write(fs.readFileSync("../dist/startPage.js", "utf8"));
      res.end();
    }
    
  }
  
})

server.listen(3000, err=> {
  if(err){
    console.error(`${err}에러 발생!`, err);
  } else {
    console.log('포트 3000으로 연결합니다.')
  }
})