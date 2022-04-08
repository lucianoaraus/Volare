import React, { useState, useEffect, useContext } from "react";

import BookingQueryContext from "../context/BookingQueryContext";
import ItemList from "../item-list-container/item-list/ItemList";
import loading from "../../assets/loading.gif";
import mockProducts from "../utils/mockProducts";

import "./item-list-container.css";

function ItemListContainer() {
  const { guestsQuantity } = useContext(BookingQueryContext);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(mockProducts);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);

  const filterByCategory = (cat) => {
    //recibe un Str con la categoria a filtrar
    let arrFiltered = [];
    arrFiltered = products.filter((p) => p.Category === cat);
    return arrFiltered;
  };

  const filterByGuests = (quantity) => {
    //recibe la cantidad de huespedes que se quieran hospedar
    let arrFiltered = [];
    arrFiltered = products.filter((p) => p.Capacity >= quantity);
    return arrFiltered;
  };

  return (
    <div className="item-list-container-parent">
      {filterByCategory("Booking").lenght === 0 ? (
        <img src={loading} alt="loading" style={{ width: 400, height: 300 }} />
      ) : (
        <>
          <h3>Made for you</h3>
          <ItemList products={filterByGuests(guestsQuantity)} />
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
