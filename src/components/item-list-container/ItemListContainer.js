import React, { useState, useEffect } from "react";

import ItemList from "../item-list-container/item-list/ItemList";

import mockProductsBooking from "../utils/mockProductsBooking";

import "./item-list-container.css";

import loading from "../../assets/loading.gif";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  // TODO:
  //  - API Fetch
  //  - una vez obtenidos los items, se le pasaran al ItemList por props.

  // 2. se crea una nueva promesa para obtener los datos del mock despues del timeout
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(mockProductsBooking);
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
      {products.length === 0 ? (
        <img src={loading} alt="loading" style={{ width: 400, height: 300 }} />
      ) : (
        <>
          <h3>Made for you</h3>
          <ItemList products={products} />
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
