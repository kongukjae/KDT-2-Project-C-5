import React, { useState } from "react";
import "./App.css";
import LogoPage from "./LogoPage";
import LoginPage from "./LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // LoginPage 또는 logoPage를 렌더링
  return (
    <div className="App">
      {isLoggedIn ? (
        <LogoPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
