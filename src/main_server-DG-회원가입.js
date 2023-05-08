import http from 'http';
import fs from 'fs';
import bookstargramConnect from './mariadb-DG.js';
import signUpQuery from './signUpQuery-DG.js';
import userInfo from './userinfo-DG.js';
import path from "path";
import url from "url";
import qs from "querystring";
// main_server.js의 절대경로를 path형태로 받아오는 구문(사용하는 컴퓨터마다 폴더 위치가 다르니 상대경로로 추적해야 한다.)
const currentPath = url.fileURLToPath(import.meta.url);
// main_server 파일이 있는 위치를 기준으로 '..'(상위폴더) 경로를 써서 root 폴더 경로를 지정하는 구문. /src 상위폴더가 root이기에 가능한 방법
const rootPath = path.normalize(currentPath + "\\..")

const server=http.createServer(function(req,res){
    console.log(req.url);
    if(req.method === "GET"){
        //index_test용
        if(req.url === "/"){
            res.writeHead(200, {'Content-Type':'text/html'});
            //파악된 rootPath의 절대경로를 기준으로 다른 파일 경로 지정하기.
            let htmlData = fs.readFileSync(path.join(rootPath, "../src/index_test.html"), "utf8");
            let userData = "";
            bookstargramConnect(signUpQuery.readAll())
            .then(result=>{
                userData = userInfo(result);
                htmlData = htmlData.replace(`{{{user}}}`, userData);
                res.write(htmlData);
                res.end();
            })

            
        }
        if(req.url === "/signinForm.js"){
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.write(fs.readFileSync(path.join(rootPath,"../src/signinForm.js"),"utf8"));
            res.end();
        }
        
    }
    if(req.method === "POST"){
        if(req.url.startsWith("/signin")){
            req.on("data", chunk=>{
                const userform = qs.parse(chunk.toString());
                console.log(userform);
                console.log(userform.id);
                console.log(userform.password);
                console.log(userform.uEmail);
                console.log(userform.uName);
                bookstargramConnect(signUpQuery.createUser(userform.id,userform.password,userform.uEmail,userform.uName))
            })
            res.writeHead(200, {'Content-Type':'text/html'});
            //파악된 rootPath의 절대경로를 기준으로 다른 파일 경로 지정하기.
            let htmlData = fs.readFileSync(path.join(rootPath, "../src/index_test.html"), "utf8");
            let userData = "";
            bookstargramConnect(signUpQuery.readAll())
            .then(result=>{
                userData = userInfo(result);
                htmlData = htmlData.replace(`{{{user}}}`, userData);
                res.write(htmlData);
                res.end();
            })
            
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