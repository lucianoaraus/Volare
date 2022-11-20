import React, { useState, useContext } from "react";
import BookingQueryContext from "../../../context/BookingQueryContext";

import "../item-list-container.css";

function ItemCount() {
  const { guestsQuantity, addGuestsToQuery, removeGuestsFromQuery } =
    useContext(BookingQueryContext);

  const [count, setCount] = useState(guestsQuantity);

  const onAdd = () => {
    setCount(count + 1);
    addGuestsToQuery();
  };

  const onRemove = () => {
    if (count > 0) {
      setCount(count - 1);
      removeGuestsFromQuery();
    }
  };

  return (
    <div className="item-count">
      <p>Adults: </p>
      <button className="button-count" onClick={onRemove}>
        -
      </button>
      <p>{count}</p>
      <button className="button-count" onClick={onAdd}>
        +
      </button>
    </div>
  );
}

export default ItemCount;
