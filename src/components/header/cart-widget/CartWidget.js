import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartWidgetContext from "../../context/CartWidgetContext";

import "../Header.css";

function CartWidget() {
  const navigate = useNavigate();
  const { reserveInt } = useContext(CartWidgetContext);
  const itemsReserved = reserveInt.length > 0 && reserveInt.length;

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="cart-widget-container">
      {reserveInt.length > 0 && (
        <p className="cart-items-number">{itemsReserved}</p>
      )}
      <button className="button-2" onClick={goToCart}>
        Cart Widget
      </button>
    </div>
  );
}

export default CartWidget;
