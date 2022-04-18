import React, { useContext } from "react";

import CartWidgetContext from "../context/CartWidgetContext";

import "../item-cart/item-cart.css";

function ItemCart({ reserve }) {
  const { removeReserveFromCart } = useContext(CartWidgetContext);

  return (
    <div className="cart-item-detail-parent">
      <div className="cart-item-detail">
        <div className="cart-item-detail-left-side-container">
          <div>
            <h3>{reserve.HotelName}</h3>
          </div>
          <p>
            <u>{reserve.Country}</u>
          </p>
          <br />
          <p>Capacity: {reserve.Capacity}</p>
          <p>
            <b>{reserve.Type}</b>
          </p>
          <br />
        </div>
        <div className="cart-item-detail-right-side-container">
          <p>Each night per bedroom</p>
          <h3>${reserve.NightPrice}</h3>
          <p>Total Price $(totalPrice)</p>
          <p className="">Taxes included</p>
          <button
            onClick={() => alert("Successful purchase!")}
            className="item-detail-button"
          >
            Purchase
          </button>
          <button
            onClick={() => removeReserveFromCart(reserve)}
            className="cancele-button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
