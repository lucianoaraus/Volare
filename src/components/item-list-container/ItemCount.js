import React, { useState } from "react";
import './ItemList.css'

const ItemCount = ({seats, initial}) => {
  const [count, setCount] = useState(initial)

  const onAdd = () => {
    if(count < seats){
      setCount(count + 1)  
    } else {
      console.log("Maximo de asientos alcanzados")
    }
  }

  const onRemove = () => {
    if(count > 1){
      setCount(count - 1)
    } else {
      console.log("Minimo de asientos alcanzados")
    }
  }

  //Con if ternario:
  /* const onAdd = () => {
    count < seats ? setCount(count + 1) : (seats, console.log("Maximo de asientos alcanzados"))
  }

  const onRemove = () => {
    count > 1 ? setCount(count - 1) : (1, console.log("Minimo de asientos alcanzado"))
  } */

  return(
    <div className="item-count">
      <button className="button-count" onClick={onRemove}>
        -
      </button>
      <p>amount: {count}</p>
      <button className="button-count" onClick={onAdd}>
        +
      </button>
    </div>
  );
}

export default ItemCount ;