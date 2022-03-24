import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = (count) => {
  return (
    <button className="header-cart-button">
      
      <ShoppingCartIcon/>
      <p>5</p>
    </button>
  );
}

export default CartWidget;