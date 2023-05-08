import React from "react";

const styles = {
  suggestion: {
    borderRadius: "25px",
    backgroundColor: "#99cccc",
    color: "#333",
    margin: "5px",
    cursor: "pointer",
  },
};

function SearchResult(props) {
  const { result, onSelect } = props;

  const handleSelect = () => {
    onSelect(result);
  };

  return (
    <div onClick={handleSelect} style={styles.suggestion}>
      <p>{result}</p>
    </div>
  );
}

export default SearchResult;
