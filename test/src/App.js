import React, { useState } from "react";
import "./App.css";
import LogoPage from "./LogoPage";
import LoginPage from "./LoginPage";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
          <LogoPage handleLogin={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;
