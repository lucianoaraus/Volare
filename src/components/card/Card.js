import React from "react";
import ItemCount from "../item-list-container/item-count/ItemCount";
import './Card.css'


function Card ({airline, origin, destiny, seatClass, baggage, price, passengers, seats}) {

  return(
    <div className="card-item">
      <h3>{airline}</h3>
      <p>Class: {seatClass}</p>
      <p>Baggage: {baggage}</p>
      <p>Origin: {origin}</p>
      <p>Destiny: {destiny}</p>
      <p>Passangers: {passengers}</p>
      <p>Price: ${price}</p>
      <ItemCount seats={seats} initial={1} />
      <button>Buy now</button>
    </div>
  )
}

export default Card;