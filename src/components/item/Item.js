import React from "react";

import ItemCount from "../item-list-container/item-count/ItemCount";

import './item.css'


function Item ({data}) {
  
  const { Airline, Origin, Destiny, SeatClass, Baggage, Price, Passengers, Seats } = data

  return( 
    <div className="card-item">
      <h3>{Airline}</h3>
      <p>Class: {SeatClass}</p>
      <p>Baggage: {Baggage}</p>
      <p>Origin: {Origin}</p>
      <p>Destiny: {Destiny}</p>
      <p>Passangers: {Passengers}</p>
      <p>Price: ${Price}</p>

      <ItemCount seats={Seats} initial={1} />
      
      <button>Buy now</button>
    </div>
  )
}

export default Item;