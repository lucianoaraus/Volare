import React, { useState, useEffect } from "react";

import ItemList from "../item-list-container/item-list/ItemList";

import mockProducts from "../utils/mockProducts";

import "./item-list-container.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  // TODO:
  //  - API Fetch
  //  - una vez obtenidos los items, se le pasaran al ItemList por props.

  // 2. se crea una nueva promesa para obtener los datos del mock despues del timeout
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(mockProducts);
      }, 2000);
    });
  };

  // 3. se hace uso del efecto del componente para llamar a la promesa y asi obtener los datos para el estado
  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  // 1. renderizado del componente -> Es lo primero en realizarlse. Luego pasa por el useEffect
  return (
    <div className="item-list-container-parent">
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
