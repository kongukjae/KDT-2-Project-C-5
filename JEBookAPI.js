import https from "https";
import mysql from "mysql";
import fs from "fs";
// const url = "https://jsonplaceholder.typicode.com/todos";
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
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     // 파싱한 데이터를 콘솔에 출력
//     data.forEach((item) => {
//       console.log(item);
//     });
//   });
// Google Books API에서 책 정보와 표지 이미지를 가져오는 함수
function getBookInfo(title) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`; // API URL
  https.get(url, (response) => {
    let data = "";
    // API 응답 데이터 수신 시
    response.on("data", (chunk) => {
      data += chunk;
      //console.log(data);
    });
    response.on("end", () => {
      const bookInfo = JSON.parse(data).items[0].volumeInfo; // 첫 번째 검색 결과에서 책 정보 가져오기
      // console.log(bookInfo);
      const thumbnailUrl = bookInfo.imageLinks.thumbnail; // 책 정보에서 표지 이미지 URL 가져오기
      console.log(thumbnailUrl);
    });
  });
}
//data 안의 title 입력
getBookInfo("The Hitchhiker's Guide to the Galaxy");
getBookInfo("Sustainable Development and Planning VIII");

const imageUrl =
  "https://books.google.com/books/content?id=DmUr6q1EDYMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";

//이미지 다운로드
https
  .get(imageUrl, (res) => {
    let imageData = "";
    res.setEncoding("binary");
    // 이미지 데이터의 인코딩 방식을 binary로 설정함. node.js에서는 blob 인코딩 방식을 지원하지않는다?
    res.on("data", (chunk) => {
      imageData += chunk;
      //이미지 저장
    });

    res.on("end", () => {
      //이미지를 파일로
      fs.writeFile("book-cover.jpg", imageData, "binary", (err) => {
        if (err) throw err;
        console.log("파일 저장");
      });
    });
  })
  .on("error", (err) => {
    console.error(err);
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

  // connection.query(INSERT INTO books ())
  connection.end();
});
