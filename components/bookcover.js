import React, { useState, useEffect } from "react";

function Bookcover({ searchTerm }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      searchTerm
    )}&maxResults=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setBook(data.items[0]);
        } else {
          setBook(null);
        }
      })
      .catch((error) => {
        console.error(error);
        setBook(null);
      });
  }, [searchTerm]);

  return (
    <div>
      {book ? (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      ) : (
        <p>No book found</p>
      )}
    </div>
  );
}

export default Bookcover;
