import React from "react";

import "./item-detail.css";

function ItemDetail() {
  return (
    <div className="item-detail-child-container">
      <div className="title">
        <h3>Title</h3>
      </div>
      <div className="sub-title">
        <p>Sub-Title Left-Side</p>
        <p>Sub-Title Right-Side</p>
      </div>
      <div className="img-container">imgs</div>
      <div className="description-container">
        <div className="description-left-side">
          <p>Left Side</p>
        </div>
        <div className="description-right-side">
          <div className="description-detail-right-side">
            <p>Righ Side</p>
            <button className="button-5">Click Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
