<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7e892d12868865f525e7fd7a05003bb1bf6f2e17
import https from "https";
import mysql from "mysql";
const url = "https://www.googleapis.com/books/v1/volumes";
// JSON 데이터를 반환하는 외부 API URL
const xhr = new XMLHttpRequest();
// API에 GET 요청 보내기
xhr.open("GET", url);
xhr.send();

xhr.onload = function () {
  // 응답으로 받은 JSON 데이터 파싱
  const data = JSON.parse(xhr.responseText);

  // 파싱한 데이터를 콘솔에 출력
  data.forEach((item) => {
    console.log(item);
  });
};

const connection = mysql.createConnection({
  host: "127.0.0.1",
<<<<<<< HEAD
=======
// import https from "https";
import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
>>>>>>> bc3f73c8 (books 테이블 생성)
=======
import https from "https";
const url = "https://www.googleapis.com/books/v1/volumes";

import mysql from "mysql";

const connection = mysql.createConnection({
  host: "127.0.0.1",
>>>>>>> f87864c7 (N오타수정)
=======
>>>>>>> 7e892d12868865f525e7fd7a05003bb1bf6f2e17
  user: "root",
  password: "Xxia1215@@",
  database: "bookstagram",
});

connection.connect();
// 데이터베이스 연결

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const userinfo = "SELECT * FROM userinfo";
=======
>>>>>>> bc3f73c8 (books 테이블 생성)
=======
const userinfo = "SELECT * FROM userinfo";
>>>>>>> f87864c7 (N오타수정)
=======
const userinfo = "SELECT * FROM userinfo";
>>>>>>> 7e892d12868865f525e7fd7a05003bb1bf6f2e17
const books = "SELECT * FROM books";

connection.query(books, (error, results, fields) => {
  if (error) {
    console.error("데이터베이스 조회 실패: " + error.stack);
    return;
  }
  console.log(results);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  connection.end();
});
=======
});

// const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`; // API URL
>>>>>>> bc3f73c8 (books 테이블 생성)
=======
  connection.end();
});
>>>>>>> f87864c7 (N오타수정)
=======
  connection.end();
});
>>>>>>> 7e892d12868865f525e7fd7a05003bb1bf6f2e17
