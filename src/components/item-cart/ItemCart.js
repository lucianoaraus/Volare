import React, { useContext } from "react";

import CartWidgetContext from "../context/CartWidgetContext";
import BookingQueryContext from "../context/BookingQueryContext";
import Modal from "../modal/Modal"

import "../item-cart/item-cart.css";

function ItemCart({ reserve }) {
  const { hotelName, country, capacity, type, nightPrice } = reserve;
  const {destination, checkInDate, checkOutDate, guestsQuantity } = useContext(BookingQueryContext);
  const { removeReserveFromCart } = useContext(CartWidgetContext);

  const successfullyPurchaseData = `Destionation: ${destination}, Check-In: ${checkInDate}, Check-Out: ${checkOutDate}, Guests: ${guestsQuantity}. Have a nice vacations 😁✈!`
  
  return (
    <div className="cart-item-detail-parent">
      <div className="cart-item-detail">
        <div className="cart-item-detail-left-side-container">
          <div>
            <h3>{hotelName}</h3>
          </div>
          <p>
            <u>{country}</u>
          </p>
          <br />
          <p>Capacity: {capacity}</p>
          <p>
            <b>{type}</b>
          </p>
          <br />
        </div>
        <div className="cart-item-detail-right-side-container">
          <p>Each night per bedroom</p>
          <h3>${nightPrice}</h3>
          <p>Total Price $(totalPrice)</p>
          <p className="">Taxes included</p>
          
          <button
            onClick={() => removeReserveFromCart(reserve)}
            className="cancele-button"
          >
            Cancel
          </button>
        </div>
      </div>
      {/* <Modal data={successfullyPurchaseData}/> */}
      
    </div>
  );
}

export default ItemCart;
