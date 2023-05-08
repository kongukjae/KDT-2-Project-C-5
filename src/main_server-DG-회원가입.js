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
        if(req.url === "/"){
            res.writeHead(200, {'Content-Type':'text/html'});
            // 파악된 rootPath의 절대경로를 기준으로 다른 파일 경로 지정하기.
            let htmlData = fs.readFileSync(path.join(rootPath, "../src/index.html"), "utf8");
            let userData = "";
            // BookstargramConnect 사용 방법 예시. signUpQuery에서 정의된 쿼리문 호출 함수를 부르거나, 직접 쿼리문을 작성한다.
            // 비동기 함수이기에 결과값을 아래 .then()을 사용하는 방식으로 리턴값을 꺼내서 쓰면 된다. 단 Promise로 비동기적으로 실행되기에 write() 및 end()는 이 then 안 콜백에서 사용해야 한다.
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

server.listen(3000, err=>{
    if(err){
        console.log(`${err}에러가 발생하였습니다.`)
    } else {
        console.log('포트 3000으로 연결되었습니다.')
    }
})