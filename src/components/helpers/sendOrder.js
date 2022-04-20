import { addDoc, collection, getFirestore } from "firebase/firestore";

const sendOrder = (data) => {
  const { buyer, items, totalPrice } = data;
  const { buyerName, phone, email } = buyer;
  const { itemName, itemPrice } = items;

  const order = {
    buyer: { name: "Agustin", phone: "111", email: "a@a.com" },
    items: [{ name: "Bici", price: 0 }],
    totalPrice: 0,
  };
  const db = getFirestore();

  const ordersCollection = collection(db, "orders");

  addDoc(ordersCollection, order).then(({ id }) =>
    console.log("id de la orden generada: ", id)
  );
};
