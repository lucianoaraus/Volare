import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

function sendOrder(fullOrderData) {
  const { contactData, buyerData, bookingItem } = fullOrderData;

  console.log(`orden completa: ${fullOrderData}`);

  const order = {
    contact: contactData,
    buyer: buyerData,
    items: bookingItem,
    totalPrice: bookingItem.nightPrice, // fix
  };
  const db = getFirestore();

  const ordersCollection = collection(db, "orders");

  addDoc(ordersCollection, order);
}

function getOrder(orderId) {
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  getDocs(ordersCollection).then((snapshot) => {});
}

export { sendOrder };
