import React, { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemDetail from "./item-detail/ItemDetail";
import "./item-detail-container.css";

function ItemDetailContainer() {
  const [products, setProducts] = useState();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "booking-items");
    getDocs(itemsCollection).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="item-detail-parent-container">
      <ItemDetail data={products} />
    </div>
  );
}

export default ItemDetailContainer;
