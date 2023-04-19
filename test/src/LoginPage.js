import React, { useState } from "react";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`ID: ${id}, Password: ${password}`);
  };
  //로그인 버튼 클릭 시 호출되는 기능이다. 기본 양식 제출 동작을 방지하고 이메일과 암호를 콘솔에 기록.

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };
  //Google 함수 처리 handleGoogleLogin Google 로그인 버튼을 클릭하면 함수가 호출된다.
  // 새 탭에서 Google 로그인 페이지가 열림.

  const handleAppleLogin = () => {
    console.log("Apple login clicked");
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={handleIdChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleAppleLogin}>Login with Apple</button>
      <button onClick={handleForgotPassword}>Forgot Password?</button>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from "react";

// function LoginPage(props) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.handleLogin(username, password);
//   };

//   return (
//     <div className="LoginPage">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={handleUsernameChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Log In</button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;
