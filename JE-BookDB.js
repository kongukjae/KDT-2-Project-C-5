import https from "https";
const url = "https://www.googleapis.com/books/v1/volumes";

import mysql from "mysql";

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
