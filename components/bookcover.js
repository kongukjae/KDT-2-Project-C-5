import React, { useState, useEffect } from "react";

function Bookcover({ searchTerm }) {
  const [books, setBooks] = useState([]);
  const [bookIndex, setBookIndex] = useState(-1);

  useEffect(() => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      searchTerm
    )}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchTerm]);

  useEffect(() => {
    const index = books.findIndex(
      (book) => book.volumeInfo.title === "모던 자바스크립트 입문"
    );
    setBookIndex(index);
  }, [books]);

  const getBookCover = (book) => {
    if (book.volumeInfo.imageLinks) {
      return book.volumeInfo.imageLinks.thumbnail;
    } else {
      return "https://via.placeholder.com/128x192.png?text=No+Image";
    }
  };

  return (
    <div>
      {bookIndex !== -1 && (
        <img
          src={getBookCover(books[bookIndex])}
          alt={books[bookIndex].volumeInfo.title}
        />
      )}
    </div>
  );
}

export default Bookcover;
