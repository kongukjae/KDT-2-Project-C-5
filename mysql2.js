const http = require('http');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'Xxia1215@@',
  database : 'MYTEST'
});

connection.connect();


const users = {
  'name':'jieun',
  'email':'jieun@gmail.com'
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
// POST 요청에서 사용자 이름과 암호 확인

} else if (method === 'POST') {
    if (url === '/login') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        // const { username, email } = qs.parse(body);
        const {name, email} = qs.parse(body);

        if (users[name] && users[name] === email) {
        // if (users[username] && users[email] === 'email') {
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
});










