import React, { useContext } from "react";
import CartWidgetContext from "../context/CartWidgetContext";

import ItemCart from "../item-cart/ItemCart";

function Cart() {
  //TODO: localStorage
  const { reserveInt } = useContext(CartWidgetContext);

  return (
    <div style={{ textAlign: "center" }}>
      <p>Your order here:</p>
      {reserveInt.map((rsv, i) => {
        return <ItemCart reserve={rsv} key={i} />;
      })}
    </div>
  );
}

export default Cart;
