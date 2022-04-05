import React, { useState, useEffect } from "react";

import ItemDetail from "./item-detail/ItemDetail";
import mockProducts from "../utils/mockProducts";

import "./item-detail-container.css";

function ItemDetailContainer(props) {
  const [products, setProducts] = useState();

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(mockProducts);
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
