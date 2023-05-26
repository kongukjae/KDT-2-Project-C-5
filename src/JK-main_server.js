import http from "http"
import fs from "fs"
import sendQuery from "./JK-mariadb.js"
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
  }else {
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
    }
    if (req.method === "POST"){
        if (req.url === "/login"){
            req.on("data", chunk=>{
                // post로 받은 데이터(JSON)을 parse하여 객체로 변환
                const data = JSON.parse(chunk);
                // 쿼리문을 보낼 때, 열은 백틱(``)으로 하고, 비교할 데이터는 작은따옴표('')를 써서 문자열이라 표기했다. 만일 전부 백틱으로 할 경우, data.id를 열중 하나로 인식하는 문제가 있었다.
                sendQuery(`SELECT * FROM \`bookstargram\`.\`userinfo\` WHERE \`user-id\`= '${data.id}'`)

                .then(result=>{
                    if(result.length > 0){
                        const user= result[0];
                        //query문의 반환값이 있을 경우, 하나의 인덱스마다 객체를 받는 배열이 result에 할당된다. 위의 Query는 1행만 반환하기에 인덱스를0,키값을 DB테이블에서 정의된 값으로 했다.
                        // DB에 있는 사용자의 pwd 정보로 검증
                        // 입력한 비밀번호(data.pwd)와 비교한다.
                        if(user[`user-pwd`] === data.pwd){
                            console.log("Login Success!")
                            // 세션ID 생성
                            const sessionId= uuidv4();
                            // 세션 정보 저장
                            sessions[sessionId]= {
                                userId: data.id,
                                userPwd: data.pwd,
                            };
                            console.log(sessions);
                            // 응답에 세션 ID 전송
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ sessionId, result: true }));
                            // return true;
                        } else {
                            console.log("Login Failed!")
                            res.writeHead(401, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ error: 'Login failed', result: false }));
                            // return false;
                        }
                    }else {
                        console.log("Login Failed! User not found!"); // DB에서 조회된 결과가 없을 때 처리
                        res.writeHead(401, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Login failed. User not found.', result: false }));
                      }
                  
                })
                //로그인이 성공했을 때만 메인피드 페이지로 이동함.
                .then(result =>{
                    console.log(result);
                    // result 값이 존재하는 경우 (로그인이 성공한 경우)
                    if(result && result.result === true){
                      console.log('Login suceeded', result);
                    // 세션 ID 저장
                    sessionStorage.setItem('sessionID', result.sessionId);
                    // navigate를 이용해 컴포넌트 이동
                    navigate('/mainFeed');
                    } else{
                        // ! 해당 부분이 콘솔에 찍히고 있다.
                        console.log('Login failed');
                    }
                });
            });

        } else {
            // 회원가입폼 테스트 구문
            req.on("data", chunk=>{
                console.log(JSON.parse(chunk))
                // 회원가입에 관련된 코드 부분
                // 데이터를 파싱하여 회원가입에 필요한 정보 추출 후
                // 데이터베이스에 저장하는 코드 필요
            })

            res.writeHead(200,{"Content-Type":"application/json"});
            const sender = {result : true}
            res.end(JSON.stringify(sender));
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