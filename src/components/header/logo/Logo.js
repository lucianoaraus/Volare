import React from "react";
import logo from "../../../assets/volare-logo.png";

function Logo() {
  return (
    <a href="http://localhost:3000/">
      <img className="header-logo" src={logo} alt="logo"/>
    </a>
  );
}

export default Logo;