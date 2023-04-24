import http from 'http';
import fs from 'fs';
import bookstargramConnect from './mariadb.js';
import signUpQuery from './signUpQuery.js';
import userInfo from './userinfo.js';

const server=http.createServer(function(req,res){
    console.log(req.url);
    if(req.method === "GET"){
        //index_test용
        if(req.url === "/"){
            res.writeHead(200, {'Content-Type':'text/html'});
            let htmlData = fs.readFileSync("../src/index_test.html", "utf8");
            let userData = "";
            bookstargramConnect(signUpQuery.readAll())
            .then(result=>{
                userData = userInfo(result);
                htmlData = htmlData.replace(`{{{user}}}`, userData);
                console.log(htmlData);
                res.write(htmlData);
                res.end();
            })

            
        }
        if(req.url === "/signupForm.js"){
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.write(fs.readFileSync("../src/signUpForm.js","utf8"));
            res.end();
        }
        
    }
    if(req.method === "POST"){
        if(req.url.startsWith("/login")){
            
        }
    }
})

server.listen(4090, err=>{
    if(err){
        console.log(`${err}에러가 발생하였습니다.`)
    } else {
        console.log('포트 4090으로 연결되었습니다.')
    }
})