import React from "react";
import { useNavigate } from "react-router-dom";

import "../Header.css";

function CartWidget(count) {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <button className="button-2" onClick={goToCart}>
      Cart Widget
    </button>
  );
}

export default CartWidget;
