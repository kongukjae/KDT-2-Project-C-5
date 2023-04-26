import http from 'http';
import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __rootname = path.dirname(__filename);
const indexPath = url.fileURLToPath("./src/index.html");
      console.log(indexPath)
const server = http.createServer((req,res)=>{
  if(req.method === "GET"){
    if(req.url === "/"){
      
      res.writeHead(200, {"Content-Type":"text/html"})
      res.write(fs.readFileSync(`../src/index.html`, "utf8"));
      res.end();
    }
    if(req.url === "/startPage.js"){
      res.writeHead(200, {"Content-Type":"text/javascript"})
      res.write(fs.readFileSync("../dist/startPage.js", "utf8"));
      res.end();
    }
    
  }
  
})

console.log(__dirname);
console.log(__filename);

server.listen(3000, err=> {
  if(err){
    console.error(`${err}에러 발생!`, err);
  } else {
    console.log('포트 3000으로 연결합니다.')
  }
})