import React, { useState } from "react";
import "./App.css";
import LogoPage from "./LogoPage";
import LoginPage from "./LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <LoginPage handleLogin={handleLogin} />
      ) : (
        <>
          <LogoPage onClick={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;
