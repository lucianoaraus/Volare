import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

function sendOrder(fullOrderData) {
  const { contactData, buyerData, bookingItem } = fullOrderData;

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

function getOrderByUser() {
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  getDocs(ordersCollection).then((snapshot) => {
    const ordersArr = snapshot.docs;
    const lastOrder = ordersArr[ordersArr.length - 1];
    console.log("lastOrder: ", lastOrder.id); // id de la ultima compra realizada
  });
}

export { sendOrder, getOrderByUser };
