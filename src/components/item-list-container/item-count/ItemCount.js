import React, { useState } from "react";
import "../item-list-container.css";

function ItemCount({ seats, initial }) {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    if (count < seats) {
      setCount(count + 1);
    } else {
      alert("Maximo de asientos alcanzados");
    }
  };

  const onRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <b>Adults: </b>
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
