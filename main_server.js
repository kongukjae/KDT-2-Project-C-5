import http from 'http';
import fs from 'fs';
import bookstargramConnect from './mariadb.js';
import signUpQuery from './signUpQuery.js';
import { startTransition } from 'react';

console.log(bookstargramConnect(signUpQuery.readAll()));
const server=http.createServer(function(req,res){
    console.log(req.url);
    if(req.method === "GET"){
        if(req.url === "/"){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(fs.readFileSync("./src/index.html", "utf8"));
            res.end();
            
        }
        if(req.url === "/signupForm.js"){
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.write(fs.readFileSync("./src/signupForm.js","utf8"));
            res.end();
        }
        if(req.url.startsWith("/login")){
            
        }
    }
    if(req.method === "POST"){

    }
})

server.listen(4090, err=>{
    if(err){
        console.log(`${err}에러가 발생하였습니다.`)
    } else {
        console.log('포트 4090으로 연결되었습니다.')
    }
})