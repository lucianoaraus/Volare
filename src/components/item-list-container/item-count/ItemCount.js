import React, { useState } from "react";
import "../item-list-container.css";

function ItemCount({ seats, initial}) {
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    if (count < seats) {
      setCount(count + 1);
    } else {
      console.log("Maximo de asientos alcanzados");
    }
  };

  const onRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      console.log("Minimo de asientos alcanzados");
    }
  };

  return (
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
};

export default ItemCount;
