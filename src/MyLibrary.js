// 내 서재 목표

import React, { useState } from 'react';
import MyLibraryTarget from '../components/MyLibrary-component/MyLibraryTarget';
import BookCounter from '../components/MyLibrary-component/BookCounter';
import Bookshelf from '../components/MyLibrary-component/Bookshelf';
import BookList from '../components/MyLibrary-component/BookList';

function MyLibrary() {

  const style = {
    border : '1px solid black'
  }

  return (
    <div>
      <h2 style ={style}>내 서재</h2>
      <MyLibraryTarget />
      <BookCounter />
      <Bookshelf />
      <BookList />
    </div>
  );
}

export default MyLibrary;