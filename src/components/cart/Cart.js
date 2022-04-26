import React, { useContext } from "react";
import CartWidgetContext from "../context/CartWidgetContext";
import BookingQueryContext from "../context/BookingQueryContext";

import ItemCart from "../item-cart/ItemCart";
import Modal from "../modal/Modal";

function Cart() {
  //TODO: localStorage
  const { reserveInt } = useContext(CartWidgetContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Cart</h3>
      <p>Your order here:</p>
      {reserveInt.map((rsv, i) => {
        return <ItemCart reserve={rsv} key={i} />;
      })}
      <Modal />
    </div>
  );
}

export default Cart;
