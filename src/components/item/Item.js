import React from "react";

import { Link } from "react-router-dom";
//import ItemCount from "../item-list-container/item-count/ItemCount";

import stars from "../../assets/stars.png";

import "./item.css";

function Item({ data }) {
  const {
    Id,
    Country,
    Location,
    HotelName,
    Addres,
    NightPrice,
    CheckIn,
    CheckOut,
    Type,
    Breakfast,
    Stock,
    Capacity,
    Images,
    Category,
  } = data;

  const totalPrice = () => {
    return (CheckOut - CheckIn) * NightPrice;
    // WIP
  };

  return (
    <div className="card-item">
      <div className="left-side-card-item">
        <img src={Images[0]} alt="product" />
      </div>
      <div className="mid-side-card-item">
        <div className="title-mid-side">
          <h3>{HotelName}</h3>
          <img src={stars} alt="stars" />
        </div>
        <p>
          <u>{`${Location}, ${Country}`}</u>
        </p>
        <br />
        <p>Capacity: {Capacity}</p>
        <p>
          <b>{Type}</b>
        </p>
        <br />
        <br />
        <p className="class-p">{Breakfast}</p>
        <p className="hot-p">Last {Stock} on this amount</p>
      </div>
      <div className="right-side-card-item">
        <p>Each night per bedroom</p>
        <h3>${NightPrice}</h3>
        <p>Total Price $(totalPrice)</p>
        <p className="light-p">Taxes included</p>
        <Link to={`/booking/${Id}`}>
          <button className="item-detail-button">View Details</button>
        </Link>
      </div>
      {/* <ItemCount seats={Seats} initial={1} /> */}
    </div>
  );
}

export default Item;
