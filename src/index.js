import React from "react";
import ReactDOM from "react-dom";

function App() {
  const name = "헬로우 리액트 감옥";
  return <div className="react">{name}</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
