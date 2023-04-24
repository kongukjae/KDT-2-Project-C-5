import React from "react";

function SearchBox({ value, onChange, onClick }) {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onClick}>Search</button>
    </div>
  );
}

export default SearchBox;
