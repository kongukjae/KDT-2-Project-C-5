import React from "react";
import SearchResult from "./SearchBookResult";

const styles = {
  input: {
    width: "200px",
    height: "70x",
    padding: "5px 10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "10px",
  },
};

function AutoComplete(props) {
  const { suggestions, inputValue, onInputChange, onSelect } = props;

  const filteredResults = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="search for book"
        onChange={(event) => onInputChange(event.target.value)}
        style={styles.input}
      />
      {filteredResults.map((result) => (
        <SearchResult key={result} result={result} onSelect={onSelect} />
      ))}
    </div>
  );
}
export default AutoComplete;
