import React from "react";

import ItemCount from "../item-list-container/item-count/ItemCount";

import './item.css'


function Item ({data}) {
  const { airline, origin, destiny, seatClass, baggage, price, passengers, seats } = data

  return( 
    <div className="card-item">
      {console.log('data desde Item: ', data)}
      <h3>{airline}</h3>
      {console.log('data.airline:', airline)}
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

export default Item;