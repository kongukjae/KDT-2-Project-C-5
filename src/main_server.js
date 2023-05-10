import http from "http"
import fs from "fs"
import sendQuery from "./mariadb.js"


// const html=fs.readFileSync("../dist/index.html");
// const js=fs.readFileSync("../dist/main.js")
const server = http.createServer(function (req, res) {

    console.log(req.url);
    console.log(req.method);
    if (req.method === "GET") {
        if (req.url === "/") {
            const html = fs.readFileSync("../dist/index.html");
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(html);
        }

        if (req.url === "/main.js") {
            console.log("main.js if문 실행");
            const js = fs.readFileSync("../dist/main.js");
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.end(js);
        }
    }
    if (req.method === "POST"){
        if (req.url === "/login"){
            req.on("data", chunk=>{
                // post로 받은 데이터(JSON)을 parse하여 객체로 변환
                const data = JSON.parse(chunk);
                // 쿼리문을 보낼 때, 열은 백틱(``)으로 하고, 비교할 데이터는 작은따옴표('')를 써서 문자열이라 표기했다. 만일 전부 백틱으로 할 경우, data.id를 열중 하나로 인식하는 문제가 있었다.
                sendQuery(`SELECT * FROM \`bookstargram\`.\`userinfo\` WHERE \`user-id\`= '${data.id}'`)
                .then(result=>{
                    if(result){
                        //query문의 반환값이 있을 경우, 하나의 인덱스마다 객체를 받는 배열이 result에 할당된다. 위의 Query는 1행만 반환하기에 인덱스를0,키값을 DB테이블에서 정의된 값으로 했다.
                        if(result[0][`user-pwd`] === data.pwd){
                            console.log("Login Success!")
                            return true;
                        } else {
                            console.log("Login Failed!")
                            return false;
                        }
                    }
                })
                //로그인이 성공했을 때만 메인피드 페이지로 이동함.
                .then(result =>{
                    console.log(result);
                    if(result){
                        const sender = {result : result}
                        console.log(sender);
                        res.writeHead(200,{"Content-Type":"application/json"});
                        res.end(JSON.stringify(sender));
                    }
                })
            })

        } else {
            // 회원가입폼 테스트 구문 주석 처리
            // req.on("data", chunk=>{
            //     console.log(JSON.parse(chunk))
            // })
            // res.writeHead(200,{"Content-Type":"application/json"});
            // const sender = {result : true}
            // res.end(JSON.stringify(sender));
        }
    }
    if (req.method === "POST") {
        if (req.url === "/reviewadd") {
          let body = "";
            // 이벤트 헨들러에서 받은 데이터를 문자열 데이터로 저장
          req.on("data", (chunk) => {
            // chunk가 여러 개 있을 수 있으므로 하나로 합쳐준다.
            body += chunk.toString();
          });
            // body 변수를 JSON형태로 변환
            // 변환한 객체를 이용하여 쿼리문 작성
          req.on("end", () => {
            const { booktitle, bookcover, isbn, summery, bookbody, userid } = JSON.parse(body);
            // 받아온 정보를 처리하는 부분 -> 대건님이 작성하신 쿼리문 적용 예정

            // DB 작업 완료된 후에 생성된 데이터가 있는지 여부를 sender 객체에 담아서 전달
            const sender = { result: true, data: { booktitle, bookcover, isbn, summery, bookbody, userid } };


            // DB에 작업을 완료 한 후, 클라이언트에게 응답
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(sender));
          });
        }
      }
      


    if(req.url==="/src/img/star.png"&&req.method==="GET"){
        const starImg=fs.readFileSync("./img/star.png");
        res.end(starImg);
    }

})


server.listen(3000, () => {
    console.log("서버 열림");
})






