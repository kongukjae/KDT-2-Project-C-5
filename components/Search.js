import React, { useState } from "react";
import AutoComplete from "./AutoComplete";

function Search(props) {
  const { value, onChange, onSubmit } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSelect = (selectedValue) => {
    setInputValue(selectedValue);
    onSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "10px",
          width: "100px",
          height: "100px",
          backgroundColor: "#E6E6FA",
          borderRadius: "4px",
          alignItems: "center",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div className="autocomplete-wrapper">
          <AutoComplete
            suggestions={[]}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onSelect={handleSelect}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          검색
        </button>
      </div>
    </form>
  );
}

export default Search;
