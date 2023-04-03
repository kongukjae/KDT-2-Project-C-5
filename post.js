const http = require('http');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');

//사용자 이름 , 암호 저장
const users = {
  // 'username': 'password',
  'jieun':'xxia1215@@'
};

const server = http.createServer((req, res) => {
  const { method, url } = req;
  // 이렇게 하면 들어오는 요청 개체에서 method 및 속성이 추출됨


  if (method === 'GET') {
    if (url === '/') {
      fs.readFile(path.join(__dirname, 'login.html'), (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    }
    //로그인 폼에서 전송버튼을 누르면 post 방식으로 요청이 전송
  } else if (method === 'POST') {
    if (url === '/login') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const { username, password } = qs.parse(body);

        if (users['jieun'] && users['jieun'] === 'xxia1215@@') {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Login!');
        } else {
          res.writeHead(401, { 'Content-Type': 'text/plain' });
          res.end("doesn't match");
        }
      });
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end();
  }
});


server.listen(3000,'localhost',()=>{
  console.log('3000port');
})
