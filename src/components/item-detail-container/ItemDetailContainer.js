import React, { useState, useEffect } from "react";

import ItemDetail from "./item-detail/ItemDetail";
import mockProductsBooking from "../utils/mockProductsBooking";

import "./item-detail-container.css";

function ItemDetailContainer(props) {
  const [products, setProducts] = useState();

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(mockProductsBooking);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="item-detail-parent-container">
      <ItemDetail data={products} />
    </div>
  );
}

export default ItemDetailContainer;
