import React, { useState, useEffect } from "react";

function Bookcover({ searchTerm }) {
  const [books, setBooks] = useState([]);

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

  return (
    <div>
      {books.map((book) => (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      ))}
    </div>
  );
}

export default Bookcover;
