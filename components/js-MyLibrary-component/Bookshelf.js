/* 내 서재 책장
책장을 나타내고, 책장안에 쌓이는 책을 보여주는 컴포넌트입니다.
책장은 기본적으로 그리드 형태로 나타내고, 필요한 경우 책장의 크기나 배치 등을 조정할 수 있습니다.
책장 컴포넌트 내부에는 책을 추가하는 폼 컴포넌트도 필요합니다.
 */


import React, { useState } from 'react';

import BookCounter from './BookCounter';
import Book from './Book';

function Bookshelf(props) {
  return (
    <div>
      <h2>서재</h2>
    </div>
  );
}

export default Bookshelf;

/* 
import React, { useState } from 'react';
import './Bookshelf.css';

function Bookshelf(props) {
  const [title, setTitle] = useState('');
  const [books, setBooks] = useState([]);
  const [bookCount, setBookCount] = useState(0);

  function handleAddBook(e) {
    e.preventDefault();
    const newBook = { title };
    setBooks([...books, newBook]);
    setBookCount(bookCount + 1);
    setTitle('');
  }

  return (
    <div>
      <h2>Bookshelf</h2>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Enter a book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
      <div className="bookshelf-container">
        {Array.from({ length: bookCount }, (_, index) => (
          <div key={index} className="bookshelf-book" />
        ))}
      </div>
    </div>
  );
}

export default Bookshelf; */