import http from "http"
import fs from "fs"
import sendQuery from "./mariadb.js"
import { send } from "process";


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
    if (req.method === "POST") {
        if (req.url === "/login") {
            req.on("data", chunk => {
                // post로 받은 데이터(JSON)을 parse하여 객체로 변환
                const data = JSON.parse(chunk);
                // 쿼리문을 보낼 때, 열은 백틱(``)으로 하고, 비교할 데이터는 작은따옴표('')를 써서 문자열이라 표기했다. 만일 전부 백틱으로 할 경우, data.id를 열중 하나로 인식하는 문제가 있었다.
                sendQuery(`SELECT * FROM \`bookstargram\`.\`userinfo\` WHERE \`user-id\`= '${data.id}'`)
                    .then(result => {
                        if (result) {
                            //query문의 반환값이 있을 경우, 하나의 인덱스마다 객체를 받는 배열이 result에 할당된다. 위의 Query는 1행만 반환하기에 인덱스를0,키값을 DB테이블에서 정의된 값으로 했다.
                            if (result[0][`user-pwd`] === data.pwd) {
                                console.log("Login Success!")
                                return true;
                            } else {
                                console.log("Login Failed!")
                                return false;
                            }
                        }
                    })
                    //로그인이 성공했을 때만 메인피드 페이지로 이동함.
                    .then(result => {
                        console.log(result);
                        if (result) {
                            const sender = { result: result }
                            console.log(sender);
                            res.writeHead(200, { "Content-Type": "application/json" });
                            res.end(JSON.stringify(sender));
                        }
                    })
            })
            //method가 POST이고 url이 /review 일시 실행되는 조건문, body에는 책리뷰 form이 저장되있어야 한다.
            if (req.url === "/reivew") {
                req.on("data", chunk => {
                    // post로 받은 데이터(JSON)을 parse하여 객체로 변환
                    // const sample = {
                    //     "userid": "dgchoi3904",
                    //     "booktitle": "개리포터와 개법사의 뼈",
                    //     "bookcover": null,
                    //     "bookauthor": "롤링스파이더",
                    //     "bookpublisher": "문학쇼츠",
                    //     "bookrelease": "20230518",
                    //     "isbn": "9781234567890",
                    //     "summery": "짧은 리뷰 내용",
                    //     "body": "리뷰 내용",
                    //     "tag": "#없어!",
                    // }
                    const bookreviewForm = JSON.parse(chunk);
                    // 책리뷰 등록 쿼리문
                    sendQuery(`INSERT INTO bookreview (userid, username, userpic, booktitle, bookcover, bookauthor, bookpublisher, isbn, summery, body, tag)
                    SELECT u.\`user-id\`, u.\`user-name\`, u.\`user-pic\`, ${data.booktitle}, ${data.bookcover}, ${data.bookauthor},${data.bookpublisher}, ${data.isbn},${data.summery},  ${data.body}, ${data.tag}
                    FROM userinfo u
                    WHERE u.\`user - id\` = ${data.userid}`)
                        .then(() => {
                            // 등록한 책리뷰의 ID, index 요청 쿼리문(바로 전 단계에 추가된 하나의 행의 id값만을 가져오는 구문이니 주의할 것.(2행 이상일 결우 그전 행의 값만 가져올 수 있다.))
                            const yourReviewIndex = sendQuery(`SELECT LAST_INSERT_ID()`)
                            return yourReviewIndex;
                        })
                        .then(result => {
                            const body = {};
                            // 받은 index 값을 토대로 작성한 행에 조회
                            body.yourReview = sendQuery(`SELECT * FROM \`bookstargram\`.\`bookreview\` WHERE \`index\` = ${result}`)
                            res.writeHead(200, { "Content-Type": "application/json" });
                            res.write(JSON.stringify(body));
                            res.end();
                        })
                    // 등록된 리뷰의 ID, index를 가져오는 쿼리문

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


        if (req.url === "/src/img/star.png" && req.method === "GET") {
            const starImg = fs.readFileSync("./img/star.png");
            res.end(starImg);
        }
    }
})


server.listen(3000, () => {
    console.log("서버 열림");
})






