import React from "react";

import { Link } from "react-router-dom";
import ItemCount from "../item-list-container/item-count/ItemCount";

import "./item.css";

function Item({ data }) {
  const {
    Airline,
    Origin,
    Destiny,
    SeatClass,
    Baggage,
    Price,
    Passengers,
    Seats,
    Id,
  } = data;

  return (
    <div className="card-item">
      <h3>{Airline}</h3>
      <p>Class: {SeatClass}</p>
      <p>Baggage: {Baggage}</p>
      <p>Origin: {Origin}</p>
      <p>Destiny: {Destiny}</p>
      <p>Passangers: {Passengers}</p>
      <p>Price: ${Price}</p>

      <ItemCount seats={Seats} initial={1} />

      <Link to={`/booking/${Id}`}>
        <button className="item-detail-button">View Details</button>
      </Link>
    </div>
  );
}

export default Item;
