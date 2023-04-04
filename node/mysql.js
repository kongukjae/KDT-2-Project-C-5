const http = require('http');
const mysql= require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'Xxia1215@@',
  database : 'MYTEST'
});
 
connection.connect();
 

// connection.query('SELECT * FROM test01', function (error, results, fields) {
//   if (error) {
//     console.log(error);
//   }
//   console.log(results);
// });
 
// connection.end();





// 사용자 이름과 암호를 저장하는 함수
function saveUser(username, email) {
  const sql = `INSERT INTO test01 (name, email) VALUES ('${username}', '${email}')`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('User saved successfully!');
  });
}

// 사용자 이름과 암호를 가져오는 함수
function getUser(username, callback) {
  const sql = `SELECT * FROM test01 WHERE name='${username}'`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
  });
}

// 사용자 추가
saveUser('jieun2', 'jieun');

// 사용자 가져오기
getUser('jieun', (result) => {
  console.log(result);
});

// 데이터베이스 연결 종료
connection.end();