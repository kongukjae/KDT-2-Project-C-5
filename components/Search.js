import React from "react";

function Search(props) {
  const { value, onChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">검색</button>
    </form>
  );
}

export default Search;
