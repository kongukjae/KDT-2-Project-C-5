import React from 'react';
import AddBook from './DG-AddBook';
import ReviewInput from './DG-ReviewInput';
import formFetch from '../src/reviewFetch'


const container = {
  display: "flex",
  flexDirection: "column",
  width: "90%",
  height: "95%",
  borderRadius: "5px",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#D9D9D9"
}

const box = {
  display: "flex",
  width: "80%",
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-around"

}

//리뷰 작성 페이지 내 도서 검색,리뷰 작성,태그,등록 등을 담당하는 컴포넌트
const WriteBox = () => {

  const handleSubmit = (event) => {
    // 기본 제출 이벤트 방지
    event.preventDefault();
    const data = {
      userid : "dgchoi3904",
      booktitle : event.target.booktitle.value,
      bookauthor : event.target.bookauthor.value,
      bookpublisher : event.target.bookpublisher.value,
      bookrelease : event.target.bookrelease.value,
      isbn : event.target.isbn.value,
      summery : event.target.summery.value,
      body  :event.target.body.value,
      tag : "#원피스"
    }
    //const abc = formFetch("POST",data,"/review")

    try {
      console.log("formFetch 시작합니다.")
      fetch("/review", {
        // HTTP 요청 메서드 지정
        method: "POST",
        // HTTP 요청 헤더 지정
        // 요청 본문에 클라이언트가 서버에 JSON 형태의 데이터를 담아 보낼 것을 명시
        headers: { "Content-Type": "application/json" },
        // HTTP 요청 본문에 담을 데이터를 지정
        // 작성한 form 객체를 JSON 형태의 문자열로 변환하여 본문에 보냄
        body: JSON.stringify(data),
      })
      .then(response => {
        // 응답이 성공적이었을 경우
      console.log("form이 보내지면 실행될 부분입니다.")
      if (response.ok) {
        const data =  response.json();
        console.log(data);
      } else {
        throw new Error("전송에 실패하였습니다.");
      }
      })  
    } catch (err) {
      console.log(err);
      throw err; // 오류를 호출자에게 전달.
    }

  }


  return (
    <div style={container}>
      <form method="POST" style={box} onSubmit={handleSubmit}>
        <AddBook></AddBook>
        <ReviewInput></ReviewInput>
        <button type="submit">등록</button>
      </form>
    </div>

  );
}

export default WriteBox;