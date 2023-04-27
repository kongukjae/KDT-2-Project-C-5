// 내 서재 목표

import React, { useState } from 'react';
import BookStagramTopLogo from '../components/BookStagramTopLogo';
import MyLibraryTarget from '../components/MyLibrary-component/MyLibraryTarget';
import BookCounter from '../components/MyLibrary-component/BookCounter';
import Bookshelf from '../components/MyLibrary-component/Bookshelf';
import BookList from '../components/MyLibrary-component/BookList';

function MyLibrary() {
  const [books, setBooks] = useState([]);
/* 
    Bookshelf 컴포넌트에서 사용할 함수
  function addBook(book) {
    setBooks([...books, book]);
  } */
  const style = {
    border : '1px solid black'

  }

  return (
    <div>
      <BookStagramTopLogo/>
      <h2 style ={style}>내 서재</h2>
      <MyLibraryTarget />
      <BookCounter />
      <Bookshelf />
      <BookList />
    </div>
  );
}

export default MyLibrary;