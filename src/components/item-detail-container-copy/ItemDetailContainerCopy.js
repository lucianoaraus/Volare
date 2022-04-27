import React, { useState, useEffect } from "react";

import ItemDetailCopy from "./item-detail-copy/ItemDetailCopy";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import "./item-detail-container-copy.css";

function ItemDetailContainerCopy() {
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
      <ItemDetailCopy data={products} />
    </div>
  );
}

export default ItemDetailContainerCopy;
