import React from "react";
import './Header.css'

import Logo from "./logo/Logo"
import NavBar from "./navbar/NavBar";
import Avatar from "./avatar/Avatar";
import CartWidget from "./cart/CartWidget";

const Header = () => {
  return (
    <header className="header">
      <Logo/>
      <NavBar/>
      <CartWidget/>
      <Avatar/>
    </header>
  );
}

export default Header;