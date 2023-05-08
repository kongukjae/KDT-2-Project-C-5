import React from "react";

function SearchResult(props) {
  const { result } = props;

  return <div>{result}</div>;
}

export default SearchResult;

//SearchResult 컴포넌트는 자동완성 결과를 렌더링
