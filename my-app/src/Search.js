import React from "react";

function Search({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">검색</button>
    </form>
  );
}

export default Search;
