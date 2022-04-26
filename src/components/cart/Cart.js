import React, { useContext } from "react";
import CartWidgetContext from "../context/CartWidgetContext";
import BookingQueryContext from "../context/BookingQueryContext";

import ItemCart from "../item-cart/ItemCart";
import Modal from "../modal/Modal";

function Cart() {
  //TODO: localStorage

  const { reserveInt } = useContext(CartWidgetContext);

  // booking data:
  const { destination, checkInDate, checkOutDate, guestsQuantity } =
    useContext(BookingQueryContext);

  // message:
  console.log(
    `Destionation: ${destination}, Check-In: ${checkInDate}, Check-Out: ${checkOutDate}, Guests: ${guestsQuantity}. Have a nice vacations 😁✈!`
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Cart</h3>
      <p>Your order here:</p>
      {reserveInt.map((rsv, i) => {
        return <ItemCart reserve={rsv} key={i} />;
      })}
      <Modal />
      {/* <button className="item-detail-button">Purchase All</button> */}
    </div>
  );
}

export default Cart;
