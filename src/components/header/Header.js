import React from "react";

import Logo from "./logo/Logo"
import NavBar from "./navbar/NavBar";
import Avatar from "./avatar/Avatar";
import CartWidget from "./cart/CartWidget";

export default function Header() {
  return (
    <header className="header">
      <Logo/>
      <NavBar/>
      <CartWidget/>
      <Avatar/>
    </header>
  );
}

