import React from "react";

function LogoPage(props) {
  const handleClick = () => {
    props.handleLogin();
  };

  return (
    <div className="LogoPage" onClick={handleClick}>
      <h1>Logo Page</h1>
    </div>
  );
}

export default LogoPage;
