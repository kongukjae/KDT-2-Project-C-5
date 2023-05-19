// import http from "http"
// import fs from "fs"
// import sendQuery from "./mariadb.js"
// import { v4 as uuidv4 } from 'uuid';

// // 세션ID를 담을 빈 객체 생성
// const sessions = {};

// // const html=fs.readFileSync("../dist/index.html");
// // const js=fs.readFileSync("../dist/main.js")
// const server = http.createServer(function (req, res) {

//     console.log(req.url);
//     console.log(req.method);
//     if (req.method === "GET") {
//         if (req.url === "/") {
//             const html = fs.readFileSync("../dist/index.html");
//             res.writeHead(200, { "Content-Type": "text/html" })
//             res.end(html);
//         }

//         if (req.url === "/main.js") {
//             console.log("main.js if문 실행");
//             const js = fs.readFileSync("../dist/main.js");
//             res.writeHead(200, { "Content-Type": "text/javascript" });
//             res.end(js);
//         }
//     }
//     if (req.method === "POST"){
//         if (req.url === "/login"){
//             req.on("data", chunk=>{
//                 // post로 받은 데이터(JSON)을 parse하여 객체로 변환
//                 const data = JSON.parse(chunk);
//                 // 쿼리문을 보낼 때, 열은 백틱(``)으로 하고, 비교할 데이터는 작은따옴표('')를 써서 문자열이라 표기했다. 만일 전부 백틱으로 할 경우, data.id를 열중 하나로 인식하는 문제가 있었다.
//                 sendQuery(`SELECT * FROM \`bookstargram\`.\`userinfo\` WHERE \`user-id\`= '${data.id}'`)
//                 .then(result=>{
//                     if(result){
//                         //query문의 반환값이 있을 경우, 하나의 인덱스마다 객체를 받는 배열이 result에 할당된다. 위의 Query는 1행만 반환하기에 인덱스를0,키값을 DB테이블에서 정의된 값으로 했다.
//                         if(result[0][`user-pwd`] === data.pwd){
//                             console.log("Login Success!")
//                             // 세션ID 생성
//                             const sessionId= uuidv4();
//                             // 세션 정보 저장
//                             sessions[sessionId]= {
//                                 userId: data.id,
//                                 userPwd: data.pwd,
//                             };
//                             // 응답에 세션 ID 전송
//                             res.writeHead(200, { 'Content-Type': 'application/json' });
//                             res.end(JSON.stringify({ sessionId }));
//                             return true;
//                         } else {
//                             console.log("Login Failed!")
//                             res.writeHead(401, { 'Content-Type': 'application/json' });
//                             res.end(JSON.stringify({ error: 'Login failed' }));
//                             return false;
//                         }
//                     }
//                 })
//                 //로그인이 성공했을 때만 메인피드 페이지로 이동함.
//                 .then(result =>{
//                     console.log(result);
//                     if(result){
//                         const sender = {result : result}
//                         console.log(sender);
//                         res.writeHead(200,{"Content-Type":"application/json"});
//                         res.end(JSON.stringify(sender));
//                     }
//                 })
//             })

//         } else {
//             // 회원가입폼 테스트 구문 주석 처리
//             // req.on("data", chunk=>{
//             //     console.log(JSON.parse(chunk))
//             // })
//             // res.writeHead(200,{"Content-Type":"application/json"});
//             // const sender = {result : true}
//             // res.end(JSON.stringify(sender));
//         }
//     }


//     if(req.url==="/src/img/star.png"&&req.method==="GET"){
//         const starImg=fs.readFileSync("./img/star.png");
//         res.end(starImg);
//     }

// })


// server.listen(3000, () => {
//     console.log("서버 열림");
// })

// 작업 중
import http from 'http';
import fs from 'fs';
import sendQuery from './mariadb.js';
import { v4 as uuidv4 } from 'uuid';

// 세션ID를 담을 빈 객체 생성
const sessions = {};

// 세션 인증 미들웨어
function sessionAuthMiddleware(req, res, next) {
  // 클라이언트의 HTTP 요청 헤더에서 세션 ID를 가져옵니다.
  const sessionId = req.headers['x-session-id'];

  // 세션 ID가 없으면 인증되지 않은 사용자입니다.
  if (!sessionId) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Unauthorized' }));
    return;
  }

  // 세션 ID를 사용하여 세션 데이터를 가져옵니다.
  const sessionData = getSession(sessionId);

  // 세션 데이터가 없으면 세션이 만료되었습니다.
  if (!sessionData) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Session expired' }));
    return;
  }

  // 세션 데이터가 있으면 인증된 사용자입니다.
  // 다음 미들웨어로 이동합니다.
  req.sessionData = sessionData;
  next();
}

// 세션 가져오기
function getSession(sessionId) {
  return sessions[sessionId];
}

const server = http.createServer(function (req, res) {
  console.log(req.url);
  console.log(req.method);

  if (req.method === 'GET') {
    if (req.url === '/') {
      const html = fs.readFileSync('../dist/index.html');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    }

    if (req.url === '/main.js') {
      console.log('main.js if문 실행');
      const js = fs.readFileSync('../dist/main.js');
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(js);
    }
  }

  if (req.method === 'POST') {
    if (req.url === '/login') {
      req.on('data', chunk => {
        // post로 받은 데이터(JSON)를 parse하여 객체로 변환
        const data = JSON.parse(chunk);
        // 쿼리문을 보낼 때, 열은 백틱(``)으로 하고, 비교할 데이터는 작은따옴표('')를 써서 문자열이라 표기했다. 만일 전부 백틱으로 할 경우, data.id를 열중 하나로 인식하는 문제가 있었다.
        sendQuery(`SELECT * FROM \`bookstargram\`.\`userinfo\` WHERE \`user-id\`= '${data.id}'`)
          .then(result => {
            if (result) {
              // query문의 반환값이 있을 경우, 하나의 인덱스마다 객체를 받는 배열이 result에 할당된다. 위의 Query는 1행만 반환하기에 인덱스를0,키값을 DB테이블에서 정의된 값으로 했다.
              if (result[0]['user-pwd'] === data.pwd) {
                console.log('Login Success!');
                // 세션ID 생성
                const sessionId = uuidv4();
                // 세션 정보 저장
                sessions[sessionId] = {
                  userId: data.id,
                  userPwd: data.pwd,
                };
                // 응답에 세션 ID 전송
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ sessionId }));
                return true;
              } else {
                console.log('Login Failed!');
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Login failed' }));
                return false;
              }
            }
          })

        // 로그인이 성공했을 때만 메인피드 페이지로 이동함.
          .then(result => {
            console.log(result);
            if (result) {
              const sender = { result: result };
              console.log(sender);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(sender));
            }
          });
      });
    } else {
      // 회원가입폼 테스트 구문 주석 처리
      // req.on("data", chunk => {
      //   console.log(JSON.parse(chunk))
      // })
      // res.writeHead(200, { 'Content-Type': 'application/json' });
      // const sender = { result: true }
      // res.end(JSON.stringify(sender));
    }
  }
  if (req.url == "/src/img/star.png" && req.method == "GET") {
    const starImg = fs.readFileSync("./img/star.png");
    res.end(starImg);
  }
  // 요청에 인증을 적용합니다.
  if (!req.headers['x-session-id']) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Unauthorized' }));
    return;
  }

  // 다음 미들웨어로 이동합니다.
  next();
  });
  
  server.listen(3000, () => {
    console.log("서버 열림");
  });
  
  // 세션 인증 미들웨어 추가
  server.use(sessionAuthMiddleware);
  