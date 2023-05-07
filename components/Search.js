import React, { useState } from "react";
import AutoComplete from "./AutoComplete";
import Modal from "./Modal";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [bookSearchValue, setBookSearchValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSelect = (selectedValue) => {
    setInputValue(selectedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleBookSearchInputChange = (e) => {
    setBookSearchValue(e.target.value);
  };

  const handleBookSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Book search submitted:", bookSearchValue);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
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
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <form onSubmit={handleBookSearchSubmit}>
          <input
            type="text"
            value={bookSearchValue}
            onChange={handleBookSearchInputChange}
            placeholder="검색어를 입력하세요."
          />
          <button type="submit">검색</button>
        </form>
      </Modal>
    </form>
  );
}

export default Search;
