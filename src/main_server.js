import http from "http";
import fs from "fs";
//import formidable from 'formidable';
import path from "path";
import url, { fileURLToPath } from "url";
import formidable from "formidable";


// const html=fs.readFileSync("../dist/index.html");
// const js=fs.readFileSync("../dist/main.js")
const __srcname = path.dirname(fileURLToPath(import.meta.url));
const __rootname = path.join(__srcname, "..");
console.log(__rootname);
const server=http.createServer(function(req,res){

    console.log(req.url);
    console.log(req.method);
    if(req.url === "/" && req.method === "GET") {
        const html=fs.readFileSync(path.join(__rootname,"dist","index.html"));
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(html);     
    }
    
    if(req.url==="/main.js" && req.method==="GET"){
        console.log("main.js if문 실행");
        const js=fs.readFileSync(path.join(__rootname,"dist","main.js"));
        res.writeHead(200,{"Content-Type":"text/javascript"});
        res.end(js);
    }
    
    if(req.method==="POST"){
        if(req.url === "/login"){
            //기본 POST타입 HTML 요청의 body 데이터 가져올때의 구문.
            // request.on('data', loginForm=>{
            //     let formdata = loginForm.toString();
                
            //     console.log(formdata);
            // })
            // Multipart Formdata를 자체 해석하여 파싱해주는 모듈. 아래와같이 옵션을 추가하고 
            // parse할때 파싱할 request와 err, fields를 콜백함수 매개변수로 두고 콜백에서 다룰 수 있게 해준다.
            // err - 에러가 났을때 해당 Error가 담기는 매개변수
            // fields - req, request의 payload, body를 확인하고 객체로 변환하여 매개변수 field에 저장한다.
            formidable({multiples: true}).parse(req, (err, fields)=> {
                    if(err){
                        console.error(err, err);
                        return;
                    }
                    console.log(fields);
                })
        }
    }

})

server.listen(3000,()=>{
    console.log("서버 열림");

})

