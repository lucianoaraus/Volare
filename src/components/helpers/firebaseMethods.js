import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

function sendOrder(fullOrderData) {
  const db = getFirestore();

  const ordersCollection = collection(db, "orders");

  addDoc(ordersCollection, fullOrderData);
}

const getLastOrder = async () => {
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  const lastOrderId = await getDocs(ordersCollection).then((snapshot) => {
    const ordersArr = snapshot.docs;
    const lastOrder = ordersArr[ordersArr.length - 1];
    return lastOrder.id;
  });
  return lastOrderId;
};

export { sendOrder, getLastOrder };
