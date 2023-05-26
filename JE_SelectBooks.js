import React, { useState } from 'react';

const SearchBooks = () => {
  const [keyword, setKeyword] = useState('');
  //검색어
  const [result, setResult] = useState([]);
  //검색 결과
  const [selectedBook, setSelectedBook] = useState(null);
//선택된 책
  const URL = `https://www.nl.go.kr/seoji/SearchApi.do?cert_key=1c81199b2a9a2305bc71bb993c45e032794d810adae4c92544bd3d8ac9c2a574&result_style=json&page_no=1&page_size=10&start_publish_date=20220509&end_start_publish=20220509`;

  const searchBooks = () => {
    const searchURL = `${URL}&title=${encodeURIComponent(keyword)}`;


    //fetch를 통해 받은 data(title,...)
    //http로 요청을 보내고 res객체를 json 형식으로 변환해서 promise 객체를 받음.
    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => {
        const books = data.docs.map((item) => ({
          title: item.TITLE,
          publisher: item.PUBLISHER,
          author: item.AUTHOR
        }));

        setResult(books);
       //setresult 로 검색 결과를 업데이트함 
      })
      .catch((error) => {
        console.error('실패:', error);
      });
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    //선택된 책의 정보를 화면에 보여주기 위해서 만듦
    //밑의 onclick으로 클릭할 때 호출됨 그리고 selectedbook 상태를 업데이트 해줌-> 선택된 책만 보여줌
    
    
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <button onClick={searchBooks}>검색</button>
      {/* select ? 1 : 2  조건이 참true일때 1이 실행되고 false인 경우 2가 실행되는 삼항 연산자*/}
      {/* selectedBook의 유무에 따라 선택된 책 정보를 표시할 지, 검색 결과를 표시할 지 처리->선택된 책이 있으면 선택된 책 정보만 보여줄 수 있게 함 */}
      {selectedBook ? (
        <div>
          {/* 선택된 책은 모든 정보를 */}
          <h3>{selectedBook.title}</h3>
          <p>{selectedBook.publisher}</p>
          <p>{selectedBook.author}</p>
        </div>
      ) : (
        <div id="result">
          {/* 검색 결과에는 책의 타이틀만 */}
          {result.map((book, index) => (
            <div key={index} onClick={() => handleBookSelect(book)}>
              <h3>{book.title}</h3>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
// 안녕?! 자두야!! 14권
export default SearchBooks;
