import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/volare-logo.png";

function Logo() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <button onClick={goToHome}>
      <img className="header-logo" src={logo} alt="logo"/>
    </button>
  );
}

export default Logo;