import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="검색어를 입력하세요."
      />
      <button type="submit">검색</button>
    </form>
  );
}

function TextBox({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="글을 작성하세요."
      />
      <button type="submit">작성</button>
    </form>
  );
}

function App() {
  const handleSearch = (query) => {
    console.log(`"${query}" 검색`);
    // TODO: 검색 결과를 처리하는 로직을 작성합니다.
  };

  const handlePost = (text) => {
    console.log(`"${text}" 글 작성`);
    // TODO: 글을 게시하는 로직을 작성합니다.
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <TextBox onSubmit={handlePost} />
    </div>
  );
}

export default App;
