import React, { useState } from "react";
import "./App.css";
import LogoPage from "./LogoPage";
import LoginPage from "./LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  //useState 훅을 사용해서 loggedin 상태를 관리한다.
  //loggedIn은 사용자가 로그인하면 true로 설정되고, 그렇지 않으면 false로 유지된다.
  const handleLogin = () => {
    setLoggedIn(true);
  };
  //handleLogin 함수는 loggedIn 상태를 업데이트하는 데 사용. 클릭될 때 호출된다.

  const handleGoBack = () => {
    setLoggedIn(false);
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
//컴포넌트는 loggedIn 상태에 따라 렌더링됨.
//만약 loggedIn이 true이면 LoginPage 컴포넌트가 렌더링되며, handleLogin 함수가 전달
//만약 loggedIn이 false이면 LogoPage 컴포넌트가 렌더링, 로고를 클릭하면 handleLogin 함수가 호출

export default App;
