// fetch("http://books.google.com/books/content?id=d_oeDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", {"Content:type":"image/jpeg"})
// .then(result=>{
//     return result.blob();
// })
// .then(blob=>{
//     const imageUrl = URL.createObjectURL(blob);
//     const imgElement = document.createElement("img"); // <img> 태그 생성
//     imgElement.src = imageUrl; // 이미지 URL 설정
//     document.body.appendChild(imgElement); // <img> 태그를 body에 추가
// })

import https from "https";
import fs from "fs";

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
