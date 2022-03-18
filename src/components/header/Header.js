import React from "react";

import Logo from "./logo/Logo"
import NavBar from "./navbar/NavBar";
import Avatar from "./avatar/Avatar";
import Cart from "./cart/Cart";

export default function Header() {
  return (
    <header className="header">
      <Logo/>
      <NavBar/>
      <Cart/>
      <Avatar/>
    </header>
  );
}

