//index.js
import ReactDOM from "react-dom";
import React from "react";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.ReactDOM.render(
  //컴포넌트 위치 root
  //App.js에서 만든 Component를 띄운다.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
