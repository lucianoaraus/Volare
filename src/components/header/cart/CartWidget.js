import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget() {
  return (
    <button className="header-cart-button">
      <ShoppingCartIcon/>
    </button>
  );
}