import http from "http";
import fs from "fs";
import formidable from 'formidable';

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
        if(request.url === "/login"){
            //기본 요청의 body 데이터 가져올때의 구문.
            request.on('data', loginForm=>{
                let formdata = loginForm.toString();
                
                console.log(formdata);
            })
            //Multipart Formdata를 자체 해석하여 파싱해주는 모듈. 아래와같이 옵션을 추가하고 parse할때 파싱할 request와 err, fields를 콜백함수 매개변수로 두고 콜백에서 다룰 수 있게 해준다.
            formidable({multiples: true}).parse(request, (err, fields)=> {
                    if(err){
                        console.error(err, err);
                        return;
                    }
                    console.log(fields);
                })
        }
    }
});


server.listen(3000, (err) => {
    if (err) {
    console.error(`에러, (${err})가 발생했습니다.`, err);
    } else {
    console.log("포트 3000으로 연결합니다.");
    }
});
