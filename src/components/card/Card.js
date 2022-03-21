import React from "react";
import './Card.css'

const Card = ({airline, origin, destiny, seatClass, baggage, price, passengers, stock}) => {

  return(
    <div className="card-item">
      <h3>{airline}</h3>
      <p>Class: {seatClass}</p>
      <p>Baggage: {baggage}</p>
      <p>Origin: {origin}</p>
      <p>Destiny: {destiny}</p>
      <p>Passangers: {passengers}</p>
      <p>Price: ${price}</p>
      <button>Buy now</button>
    </div>
  )
}

export default Card;