import React, { useState } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";
import TextInput from "./TextInput";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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

  return (
    <div>
      <SearchResult items={searchResult} />
      <TextInput value={searchText} onChange={handleTextChange} />
      <Search
        value={searchText}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />
    </div>
  );
}

export default App;
