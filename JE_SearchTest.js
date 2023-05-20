




import React, { useState } from 'react';

const SearchBooks = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState([]);
  

  const URL = `https://www.nl.go.kr/seoji/SearchApi.do?cert_key=1c81199b2a9a2305bc71bb993c45e032794d810adae4c92544bd3d8ac9c2a574&result_style=json&page_no=1&page_size=10&start_publish_date=20220509&end_start_publish=20220509`;

  const searchBooks = () => {
    const searchURL = `${URL}&title=${encodeURIComponent(keyword)}`;

    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => {
        const books = data.docs.map((item) => ({
          title: item.TITLE,
          publisher: item.PUBLISHER,
          author: item.AUTHOR
        }));

        setResult(books);
      })
      .catch((error) => {
        console.error('실패:', error);
      });
  };

  return (
    <div>
      <h1>책 검색</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <button onClick={searchBooks}>검색</button>
      <div id="result">
        {result.map((book, index) => (
          <div key={index}>
            <p>{book.title}</p>
            <p>{book.publisher}</p>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;
