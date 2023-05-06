import React, { useState } from "react";
import AutoComplete from "./AutoComplete";

const styles = {
  header: {
    fontSize: "24px",
    marginTop: "10px",
    width: "150px",
    height: "150px",
    backgroundColor: "#DCDCDC",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    marginLeft: "10px",
    cursor: "pointer",
  },
};

function Search(props) {
  const { value, onChange, onSubmit } = props;
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState(["소설/시/희곡", "자기계발"]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSelect = (selectedValue) => {
    setInputValue(selectedValue);
  };

  return (
    <form onSubmit={onSubmit} style={styles.form}>
      <div style={styles.header}></div>
      <div style={styles.wrapper}>
        <div className="autocomplete-wrapper">
          <AutoComplete
            suggestions={suggestions}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onSelect={handleSelect}
          >
            {suggestions.map((suggestion) => (
              <div key={suggestion} onClick={() => handleSelect(suggestion)}>
                {suggestion}
              </div>
            ))}
          </AutoComplete>
        </div>
        <button type="submit" style={styles.button}>
          검색
        </button>
      </div>
    </form>
  );
}

export default Search;
