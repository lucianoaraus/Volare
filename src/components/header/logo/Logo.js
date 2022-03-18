import React from "react";
import logo from "../../../assets/volare-logo.png";

export default function Logo() {
  return (
    <a href="#">
      <img className="header-logo" src={logo} alt="logo"/>
    </a>
  );
}