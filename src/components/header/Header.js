import React from "react";
import './Header.css'

import Logo from "./logo/Logo"
import NavBar from "./navbar/NavBar";
import RightSide from "./right side/RightSide";

function Header () {
  return (
    <header className="header">
      <Logo/>
      <NavBar/>
      <RightSide/>
    </header>
  );
}

export default Header;