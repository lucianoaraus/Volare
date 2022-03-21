import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <button className="header-cart-button">
      <ShoppingCartIcon/>
    </button>
  );
}

export default CartWidget;