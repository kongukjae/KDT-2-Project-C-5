<<<<<<< HEAD
<<<<<<< HEAD
import https from "https";
const url = "https://www.googleapis.com/books/v1/volumes";

import mysql from "mysql";

const connection = mysql.createConnection({
  host: "127.0.0.1",
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
  user: "root",
  password: "Xxia1215@@",
  database: "bookstagram",
});

connection.connect();
// 데이터베이스 연결

<<<<<<< HEAD
<<<<<<< HEAD
const userinfo = "SELECT * FROM userinfo";
=======
>>>>>>> bc3f73c8 (books 테이블 생성)
=======
const userinfo = "SELECT * FROM userinfo";
>>>>>>> f87864c7 (N오타수정)
const books = "SELECT * FROM books";

connection.query(books, (error, results, fields) => {
  if (error) {
    console.error("데이터베이스 조회 실패: " + error.stack);
    return;
  }
  console.log(results);
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