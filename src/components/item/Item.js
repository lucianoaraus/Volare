import React from "react";

import { Link } from "react-router-dom";
//import ItemCount from "../item-list-container/item-count/ItemCount";

import stars from "../../assets/stars.png";

import "./item.css";

function Item({ data }) {
  const {
    id,
    country,
    location,
    hotelName,
    nightPrice,
    type,
    breakfast,
    stock,
    capacity,
    images,
  } = data;

  return (
    <div className="card-item">
      <div className="left-side-card-item">
        <img src={images[0]} alt="product" />
      </div>
      <div className="mid-side-card-item">
        <div className="title-mid-side">
          <h3>{hotelName}</h3>
          <img src={stars} alt="stars" />
        </div>
        <p>
          <u>{`${location}, ${country}`}</u>
        </p>
        <br />
        <p>Capacity: {capacity}</p>
        <p>
          <b>{type}</b>
        </p>
        <br />
        <br />
        <p className="class-p">{breakfast}</p>
        <p className="hot-p">Last {stock} on this amount</p>
      </div>
      <div className="right-side-card-item">
        <p>Each night per bedroom</p>
        <h3>${nightPrice}</h3>
        <p>Total Price $(totalPrice)</p>
        <p className="light-p">Taxes included</p>
        <Link to={`/booking/${id}`}>
          <button className="item-detail-button">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
