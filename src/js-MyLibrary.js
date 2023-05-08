// 내 서재 목표

import React, { useState } from 'react';
import MyLibraryTarget from '../components/js-MyLibrary-component/MyLibraryTarget';
import BookCounter from '../components/js-MyLibrary-component/BookCounter';
import Bookshelf from '../components/js-MyLibrary-component/Bookshelf';
import BookList from '../components/js-MyLibrary-component/BookList';

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