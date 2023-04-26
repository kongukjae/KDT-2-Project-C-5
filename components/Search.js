//1.기본 검색 기능구현

// import React from "react";

// function Search(props) {
//   const { value, onChange, onSubmit } = props;

//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" value={value} onChange={onChange} />
//       <button type="submit">검색</button>
//     </form>
//   );
// }

// export default Search;

//2.자동완성 기능 추가하기

import React, { useState } from "react";
import AutoComplete from "./AutoComplete";

function Search(props) {
  const { value, onChange, onSubmit } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <AutoComplete
        suggestions={["소설", "자기 계발", "과학", "역사"]}
        inputValue={inputValue}
        onInputChange={handleInputChange}
      />
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">검색</button>
    </form>
  );
}

export default Search;
