// import React from "react";

// function LogoPage(props) {
//   const handleClick = () => {
//     props.handleLogin();
//   };

//   return (
//     <div className="LogoPage" onClick={handleClick}>
//       <h1>Logo Page</h1>
//     </div>
//   );
// }

// export default LogoPage;
// import React from "react";
// import { Link } from "react-router-dom";

// function LogoPage({ handleLogin }) {
//   return (
//     <div>
//       <h1>Logo Page</h1>
//       <Link to="/login">
//         <button>Login</button>
//       </Link>
//     </div>
//   );
// }

// export default LogoPage;

// import React from "react";
// import logo from "./logo.svg";

// function LogoPage({ handleLogin }) {
//   return (
//     <div className="LogoPage">
//       <img src={logo} alt="logo" onClick={handleLogin} />
//     </div>
//   );
// }

// export default LogoPage;

// import React from "react";
// import logo from "./logo.svg";

// function LogoPage(props) {
//   const handleLoginClick = () => {
//     props.handleLogin();
//   };

//   return (
//     <div className="LogoPage">
//       <header className="LogoPage-header">
//         <img
//           src={logo}
//           className="LogoPage-logo"
//           alt="logo"
//           onClick={handleLoginClick}
//         />
//         <p>Click the logo to go to the login page.</p>
//       </header>
//     </div>
//   );
// }

// export default LogoPage;
import React from "react";
import logo from "./logo.svg";

function LogoPage(props) {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="logo-page">
      <img src={logo} alt="logo" onClick={props.onClick} />
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default LogoPage;
