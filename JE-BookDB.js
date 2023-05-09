import https from "https";
import mysql from "mysql";
const url = "https://jsonplaceholder.typicode.com/todos";
// // JSON 데이터를 반환하는 외부 API URL
// const xhr = new XMLHttpRequest();
// // API에 GET 요청 보내기
// xhr.open("GET", url);
// xhr.send();

// xhr.onload = function () {
//   // 응답으로 받은 JSON 데이터 파싱
//   const data = JSON.parse(xhr.responseText);

//   // 파싱한 데이터를 콘솔에 출력
//   data.forEach((item) => {
//     console.log(item);
//   });
// };
// API에 GET 요청 보내기
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // 파싱한 데이터를 콘솔에 출력
    data.forEach((item) => {
      console.log(item);
    });
  });

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Xxia1215@@",
  database: "bookstagram",
});

connection.connect();
// 데이터베이스 연결

const userinfo = "SELECT * FROM userinfo";
const books = "SELECT * FROM books";

connection.query(books, (error, results, fields) => {
  if (error) {
    console.error("데이터베이스 조회 실패: " + error.stack);
    return;
  }
  console.log(results);
  connection.end();
});
