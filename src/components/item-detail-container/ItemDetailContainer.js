import React from "react";

import "./item-detail-container.css";

import ItemDetail from "./item-detail/ItemDetail";

function ItemDetailContainer() {
  return (
    <div className="item-detail-parent-container">
      <h3>Item Detail Container</h3>
      <ItemDetail />
    </div>
  );
}

export default ItemDetailContainer;
