import { addDoc, collection, getFirestore } from "firebase/firestore";

function sendOrder(fullOrderData) {
  const { buyerData, bookingData } = fullOrderData;

  const order = {
    buyer: buyerData,
    items: bookingData,
    totalPrice: bookingData.nightPrice, // fix
  };
  const db = getFirestore();

  const ordersCollection = collection(db, "orders");

  addDoc(ordersCollection, order);
}

export { sendOrder };
