import React from 'react';



//도서 검색 페이지에서 검색된 도서를 표현하는 컴포넌트. 컴포넌트 props로는 책의 이미지와 제목을 넘겨야함
//책 이미지 : bookImg , 책 제목 : bookTitle
//김동주
const BookBox=(props)=>{

  return(
    <div>

      <div>
        <div>
          <img></img>
        </div>
        <div>{props.bookTitle}</div>
      </div>
      
    </div>

  );
}



