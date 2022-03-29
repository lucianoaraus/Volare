import React from "react";
import CartWidget from "../cart/CartWidget";

import '../Header.css'

function RightSide (){
  return (
    <div className="right-side-header">
      <CartWidget/>
      <button className="button-3">Sign In</button>
    </div>
  );
}

export default RightSide;