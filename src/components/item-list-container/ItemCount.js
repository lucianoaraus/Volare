import React from "react";
import './ItemList.css'

const ItemCount = ({seats, initial}) => {

  const onAdd = () => {
    initial += 1
  }

  const onRemove = () => {
    initial -= 1
  }

  return(
    <div className="item-count">
      <button className="button-count" onClick={onRemove}>
        -
      </button>
      <p>amount: {initial}</p>
      <button className="button-count" onClick={onAdd}>
        +
      </button>
    </div>
  );
}

export default ItemCount ;