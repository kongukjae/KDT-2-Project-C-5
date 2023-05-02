// // 검색어 입력 시마다 검색어에 대한 결과를 가져오는 함수 작성
// // 가져온 결과를 저장하기 위한 상태 변수 작성
// // 검색창 컴포넌트에 검색어 자동완성 기능 추가
// import React, { useState, useEffect } from "react";

// // 검색 결과가 업데이트될 때마다 콘솔에 검색 결과를 출력

// function Autocomplete(props) {
//   const { value, onChange, onSubmit } = props;
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // 검색어에 대한 결과를 가져오는 함수
//     const fetchSearchResults = async () => {
//       const response = await fetch(`API_URL?query=${value}`);
//       const results = await response.json();
//       setSearchResults(results);
//     };

//     if (value !== "") {
//       fetchSearchResults();
//     } else {
//       setSearchResults([]);
//     }
//   }, [value]);

//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" value={value} onChange={onChange} />
//       {/* 이전의 검색 결과를 보여줌 */}

//       <ul>
//         {searchResults.map((result) => (
//           <li key={result.id}>{result.title}</li>
//         ))}
//       </ul>
//       <button type="submit">검색</button>
//     </form>
//   );
// }

// // export default Autocomplete;
// import React, { useState, useEffect } from "react";
// //리엑트 모듈에서 useEffect 훅을 불러옴

// function Autocomplete(props) {
//   const { value, onChange, onSubmit } = props;
//   //props에서 value, onChange, onSubmit 값을 추출하여 변수로 할당
//   const [searchResults, setSearchResults] = useState([]);
//   //초기값 설정

//   // // 검색 결과가 업데이트될 때마다 콘솔에 검색 결과를 출력
//   // useEffect(() => {
//   //   console.log(searchResults);
//   // }, [searchResults]);

//   useEffect(() => {
//     // 검색어에 대한 결과를 가져오는 함수
//     // const fetchSearchResults = async () => {
//     //   const response = await fetch(`API_URL?query=${value}`);
//     //   const results = await response.json();
//     //   setSearchResults(results);
//     // };
//     const fetchSearchResults = async () => {
//       const response = await fetch(`API_URL?query=${value}`);
//       const results = await response.json();
//       setSearchResults(results);
//       console.log(results);
//       console.log(value);
//     };

//     // fetchSearchResults() 함수를 호출하여 검색 결과를 가져와 setSearchResults() 함수를 사용하여 searchResults 상태 변수를 업데이트
//     if (value !== "") {
//       fetchSearchResults();
//     } else {
//       setSearchResults([]);
//     }
//   }, [value]);
//   console.log(searchResults);

//   //검색창과 검색 결과 목록
//   //검색버튼
//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" value={value} onChange={onChange} />
//       <button type="submit">검색</button>
//     </form>
//   );
// }

// export default Autocomplete;

import React from "react";
import SearchResult from "./SearchResult";

function AutoComplete(props) {
  const { suggestions, inputValue, onInputChange } = props;

  // 입력값을 바탕으로 일치하는 검색 결과를 필터링합니다.
  const filteredResults = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => onInputChange(event.target.value)}
      />
      {filteredResults.map((result) => (
        <SearchResult key={result} result={result} />
      ))}
    </div>
  );
}

export default AutoComplete;

// AutoComplete 컴포넌트는 suggestions, inputValue, 그리고 onInputChange props를 받습니다. suggestions는 자동완성 결과를 담은 배열이며, inputValue는 현재 검색어를 나타냅니다. onInputChange는 검색어가 변경될 때마다 호출되는 콜백 함수입니다.
// 이 컴포넌트에서는 inputValue를 사용하여 suggestions 배열을 필터링하고, SearchResult 컴포넌트로 결과를 렌더링합니다. onInputChange 함수는 input 요소의 onChange 이벤트에서 호출되며, 입력값이 변경될 때마다 호출됩니다.
