import React, { useState } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";
import TextInput from "./TextInput";
import PostInput from "./PostInput";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // TODO: 검색 기능 구현
  };

  const handleTextChange = (e) => {
    // TODO: 텍스트 입력 처리
  };

  const handlePostSave = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <SearchResult items={searchResult} />
      <TextInput value={searchText} onChange={handleTextChange} />
      <Search
        value={searchText}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />
      <PostInput onSave={handlePostSave} />
    </div>
  );
}

export default App;
