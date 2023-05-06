import React from "react";

function SearchResult(props) {
  const { result, onSelect } = props;

  const handleSelect = () => {
    onSelect(result);
  };

  return (
    <div onClick={handleSelect}>
      <p>{result}</p>
    </div>
  );
}

export default SearchResult;
