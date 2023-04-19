import React from "react";
import logo from "./logo.svg";

function LogoPage(props) {
  const handleClick = () => {
    props.handleLogin();
  };

  return (
    <div className="logo-page">
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default LogoPage;
