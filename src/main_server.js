import http from "http"
import fs from "fs"
import sendQuery from "./mariadb.js"
import { v4 as uuidv4 } from 'uuid';

// 세션ID를 담을 빈 객체 생성
const sessions = {};

// 사용자의 세션을 검사하는 함수이다.
// 요청 헤더의 쿠키
// 옳바른 세션을 갖고 있을 시 true 반환
// 그렇지 않을 시 false 반환
// ! 로그인 과정에서 행해져야 하는 로직을 isSessionChecker로 감싸면 된다.
function isSessionChecker(req) {
    // 해당 요청에서 전달된 쿠키 문자열을 cookies라는 변수에 저장
    const cookies = req.headers.cookie;
    // 쿠키 문자열이 존재하고, 해당 쿠키 값에 대응하는 세션 데이터가 있는지를 동시에 검사
    if (cookies && sessions[cookies]) {
        // 세션 데이터가 있으면 인증된 사용자이다.
        return true;
    } else {
        // 세션 데이터가 없으면 인증이 안된 사용자이다.
        return false;
    }
}

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
        // mainFeed요청에서 세션확인
        if (req.url === "/mainFeed") {
            if (isSessionChecker(req)) {
                // 세션이 인증된 사용자의 경우
                const mainFeed = fs.readFileSync('./mainFeed.js');
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(mainFeed);
            } else {
                // 세션이 인증되지 않은 사용자의 경우 로그인으로 리디렉션
                res.writeHead(302, { "Location": "/login" });
                res.end();
            }
        }
        if (req.url === "/39f0a76ba480d609d512.jpg") {
            let imgfile = fs.readFileSync("../dist/39f0a76ba480d609d512.jpg")
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.end(imgfile);
        }
        if (req.url === "/8813653f0ed105951c0d.jpg") {
            let imgfile = fs.readFileSync("../dist/8813653f0ed105951c0d.jpg")
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.end(imgfile);
        }
        if (req.url === "/1914788ea6dfd61813b9.jpg") {
            let imgfile = fs.readFileSync("../dist/1914788ea6dfd61813b9.jpg")
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.end(imgfile);
        }
        if (req.url === "/ff996ea7c61e440abbe9.jpg") {
            let imgfile = fs.readFileSync("../dist/ff996ea7c61e440abbe9.jpg")
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.end(imgfile);
        }
        if (req.url === "/47f6150da6b3e4b3c073.jpg") {
            let imgfile = fs.readFileSync("../dist/47f6150da6b3e4b3c073.jpg")
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.end(imgfile);
        }
        if (req.url === "/8ac05eca1cd54b571960.jpg") {
            let imgfile = fs.readFileSync("../dist/8ac05eca1cd54b571960.jpg")
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.end(imgfile);
        }
        if (req.url === "/7d1c0363b1ef7e507d87.png") {
            let imgfile = fs.readFileSync("../dist/7d1c0363b1ef7e507d87.png")
            res.writeHead(200, { "Content-Type": "image/png" })
            res.end(imgfile);
        }
        if (req.url === "/69f95ec70c687226cb73.png") {
            let imgfile = fs.readFileSync("../dist/69f95ec70c687226cb73.png")
            res.writeHead(200, { "Content-Type": "image/png" })
            res.end(imgfile);
        }
    }
    if (req.method === "POST") {
        if (req.url === "/login") {
            let body = "";
            req.on("data", chunk => {
                body += chunk;
            });
            req.on("end", () => {
                // post로 받은 데이터(JSON)을 parse하여 객체로 변환
                const data = JSON.parse(body);
                // 쿼리문을 보낼 때, 열은 백틱(``)으로 하고, 비교할 데이터는 작은따옴표('')를 써서 문자열이라 표기했다. 만일 전부 백틱으로 할 경우, data.id를 열중 하나로 인식하는 문제가 있었다.
                sendQuery(`SELECT * FROM \`bookstargram\`.\`userinfo\` WHERE \`user-id\`= '${data.id}'`)
                    .then(result => {
                        console.log(result);
                        const user = result[0];
                        //query문의 반환값이 있을 경우, 하나의 인덱스마다 객체를 받는 배열이 result에 할당된다. 위의 Query는 1행만 반환하기에 인덱스를0,키값을 DB테이블에서 정의된 값으로 했다.
                        // DB에 있는 사용자의 pwd 정보로 검증
                        // 입력한 비밀번호(data.pwd)와 비교한다.
                        if (user[`user-pwd`] === data.pwd) {
                            console.log("Login Success!")
                            // 세션ID 생성
                            const sessionId = uuidv4();
                            // 응답에 세션 ID 전송
                            res.writeHead(200, { "Content-Type": "application/json" });
                            res.end(JSON.stringify({ success: true, sessionId, userId: data.id }));
                            // res.writeHead(200, { 'Content-Type': 'application/json' });
                            // res.end(JSON.stringify({ sessionId, result: true }));
                            // return true;
                        } else {
                            console.log("Login Failed!");
                            res.writeHead(200, { "Content-Type": "application/json" });
                            res.end(JSON.stringify({ success: false }));
                            // res.writeHead(401, { 'Content-Type': 'application/json' });
                            // res.end(JSON.stringify({ error: 'Login failed', result: false }));
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        res.writeHead(500, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ success: false, error: "Server error" }));
                    })
            });


        }//method가 POST이고 url이 /review 일시 실행되는 조건문, body에는 책리뷰 form이 저장되있어야 한다.
        if (req.url === "/review") {
            console.log("여기 실행됨.")
            let body = "";
            req.on("data", chunk => {
                body += chunk;
            })
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
            req.on("end", () => {
                const bookreviewForm = JSON.parse(body);
                // 책리뷰 등록 쿼리문
                console.log(bookreviewForm);
                sendQuery(`INSERT INTO bookreview (userid, username, userpic, booktitle, bookcover, bookauthor, bookpublisher, isbn, summery, body, tag) SELECT \`userinfo\`.\`user-id\`, \`userinfo\`.\`user-name\`, \`userinfo\`.\`user-pic\`, "${bookreviewForm.booktitle}", "${bookreviewForm.bookcover}", "${bookreviewForm.bookauthor}","${bookreviewForm.bookpublisher}", "${bookreviewForm.isbn}","${bookreviewForm.summery}",  "${bookreviewForm.body}", "${bookreviewForm.tag}" FROM userinfo WHERE \`userinfo\`.\`user-id\` = "${bookreviewForm.userid}"`)
                    .then(() => {
                        // 등록한 책리뷰의 ID, index 요청 쿼리문(바로 전 단계에 추가된 하나의 행의 id값만을 가져오는 구문이니 주의할 것.(2행 이상일 결우 그전 행의 값만 가져올 수 있다.))
                        sendQuery(`SELECT * FROM bookreview ORDER BY \`index\` DESC LIMIT 1`)
                            .then(result => {
                                // 테이블에 등록된 최신 글(자신이 등록한 글) 콘솔에 출력
                                console.log(result[0]);
                                // response.body로 담아 보낼 데이터를 body에 할당.
                                const body = result[0];
                                res.writeHead(200, { "Content-Type": "application/json" });
                                res.write(JSON.stringify(body));
                                res.end();
                            })
                    })

                // 등록된 리뷰의 ID, index를 가져오는 쿼리문

            })

        } else {
            // 회원가입폼 테스트 구문
            // req.on("data", chunk => {
            //     console.log(JSON.parse(chunk))
            //     // 회원가입에 관련된 코드 부분
            //     // 데이터를 파싱하여 회원가입에 필요한 정보 추출 후
            //     // 데이터베이스에 저장하는 코드 필요
            // })

            // res.writeHead(200, { "Content-Type": "application/json" });
            // const sender = { result: true }
            // res.end(JSON.stringify(sender));
        }
    }


    if (req.url === "/src/img/star.png" && req.method === "GET") {
        const starImg = fs.readFileSync("./img/star.png");
        res.end(starImg);
    }

})


server.listen(3000, () => {
    console.log("서버 열림");
})