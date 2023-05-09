import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Xxia1215@@",
  database: "bookstagram",
});

connection.connect();
// 데이터베이스 연결
// const books = "SELECT * FROM books";

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("연결 성공");
});

// 데이터 조회
connection.query("SELECT * FROM userinfo", (error, results, fields) => {
  if (error) {
    console.error("데이터베이스 조회 실패: " + error.stack);
    return;
  }
  console.log(results);
});

// connection.query(books, (error, results, fields) => {
//   if (error) {
//     console.error("데이터베이스 조회 실패: " + error.stack);
//     return;
//   }
//   console.log(results);
// });
