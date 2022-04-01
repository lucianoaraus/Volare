import React, { useState, useEffect } from "react";

import ItemDetail from "./item-detail/ItemDetail";
import mockProducts from "../utils/mockProducts";

import "./item-detail-container.css";

function ItemDetailContainer(props) {
  const { callBack } = props;
  const [product, setProduct] = useState();

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(mockProducts);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts().then((products) => {
      const p = products.filter((product) => {
        return product.Id === 0;
      });
      setProduct(p[0]);
    });
  }, []);

  return (
    <div className="item-detail-parent-container">
      <ItemDetail data={product} />
      <button
        onClick={() => callBack()}
        className="button-3"
        style={{ marginBottom: 32 }}
      >
        Go Back
      </button>
    </div>
  );
}

export default ItemDetailContainer;
