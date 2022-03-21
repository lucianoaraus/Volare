import React from "react";
import './Card.css'

const Card = ({airline, origin, destiny, seatClass, 
      baggage, price, passengers, stock, children}) => {

  return(
    <div className="card-item">
      <h3>{airline}</h3>
      <p>Class: {seatClass}</p>
      <p>Baggage: {baggage}</p>

      <br/>

      <p>Origin: {origin}</p>

      <br/>

      <p>Destiny: {destiny}</p>

      <br/>

      <p>Passangers: {passengers}</p>
      <p>Price: ${price}</p>
      <button>Buy now</button>
      <>{children}</>
    </div>
  )
}

export default Card;