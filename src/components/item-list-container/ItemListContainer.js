import React, { useState, useEffect, useContext } from "react";

import BookingQueryContext from "../context/BookingQueryContext";
import ItemList from "../item-list-container/item-list/ItemList";
import loading from "../../assets/loading.gif";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import "./item-list-container.css";

function ItemListContainer() {
  const { guestsQuantity } = useContext(BookingQueryContext);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const db = getFirestore();
    const itemsCollection = collection(db, "booking-items");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(getDocs(itemsCollection));
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts().then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  //const filterByCategory = (cat) => {
  //  let arrFiltered = [];
  //  arrFiltered = products.filter((p) => p.category === cat);
  //  return arrFiltered;
  //};

  const filterByGuests = (quantity) => {
    let arrFiltered = [];
    arrFiltered = products.filter((p) => p.capacity >= quantity);
    return arrFiltered;
  };

  return (
    <div className="item-list-container-parent">
      <h3>Made for you</h3>
      {filterByGuests(guestsQuantity).length === 0 ? (
        <img src={loading} alt="loading" style={{ width: 400, height: 300 }} />
      ) : (
        <ItemList products={filterByGuests(guestsQuantity)} />
      )}
    </div>
  );
}

export default ItemListContainer;
