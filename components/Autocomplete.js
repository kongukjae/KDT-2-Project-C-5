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

// export default Autocomplete;
import React, { useState, useEffect } from "react";
//리엑트 모듈에서 useEffect 훅을 불러옴

function Autocomplete(props) {
  const { value, onChange, onSubmit } = props;
  //props에서 value, onChange, onSubmit 값을 추출하여 변수로 할당
  const [searchResults, setSearchResults] = useState([]);
  //초기값 설정

  // // 검색 결과가 업데이트될 때마다 콘솔에 검색 결과를 출력
  // useEffect(() => {
  //   console.log(searchResults);
  // }, [searchResults]);

  useEffect(() => {
    // 검색어에 대한 결과를 가져오는 함수
    const fetchSearchResults = async () => {
      const response = await fetch(`API_URL?query=${value}`);
      const results = await response.json();
      setSearchResults(results);
    };

    // fetchSearchResults() 함수를 호출하여 검색 결과를 가져와 setSearchResults() 함수를 사용하여 searchResults 상태 변수를 업데이트

    if (value !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [value]);
  console.log(searchResults);

  //색어가 빈 문자열일 경우, searchResults 상태 변수를 빈 배열([])로 업데이트
  //검색창과 검색 결과 목록
  //검색버튼
  //searchResults 배열을 map() 함수를 사용하여 순회하면서 검색 결과를 <li> 태그로 감싸 출력
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">검색</button>
    </form>
  );
}

export default Autocomplete;
