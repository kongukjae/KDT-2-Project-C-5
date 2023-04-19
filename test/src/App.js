import React, { useState } from "react";
import "./App.css";
import LogoPage from "./LogoPage";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="App">
      <Router>
        {loggedIn ? (
          <Switch>
            <Route path="/">
              <LoginPage handleLogin={handleLogin} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/">
              <LogoPage handleLogin={handleLogin} />
            </Route>
          </Switch>
        )}
      </Router>
      {loggedIn && <button onClick={handleBack}>Go back</button>}
    </div>
  );
}

export default App;
