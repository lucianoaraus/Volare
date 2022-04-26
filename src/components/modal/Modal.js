import React, { useState, useEffect, useContext } from "react";
import { collection, getFirestore, getDocs } from "firebase/firestore";

import CartWidgetContext from "../context/CartWidgetContext";
import { useForm } from "react-hook-form";

import { sendOrder } from "../helpers/sendOrder";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// modal styles
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 4,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// TODO  (VERY IMPORTANT!!!)
// optimizar la cantidad de veces que se renderizan los modales

export default function NestedModal() {
  // modal
  const [open, setOpen] = useState(false);

  // form
  const { register, handleSubmit } = useForm();

  //data
  const [buyerData, setBuyerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [orderReady, setOrderReady] = useState(false);
  const { reserveInt } = useContext(CartWidgetContext);
  const bookingData = reserveInt[0]; //fix

  const fullOrderData = { buyerData, bookingData };

  useEffect(() => {
    orderReady && sendOrder(fullOrderData);
  });

  const handleOpenParent = () => {
    setOpen(true);
  };
  const handleCloseParent = () => {
    setOpen(false);
  };

  const onSubmit = (e) => {
    setBuyerData(e);
    setOrderReady(true);
  };

  const data = { buyerData, handleCloseParent };

  return (
    <div>
      <button onClick={handleOpenParent} className="item-detail-button">
        Purchase All
      </button>

      <Modal
        open={open}
        onClose={handleCloseParent}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2>User data:</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              First Name:
              <input {...register("firstName")} />
            </label>
            <label>
              Last Name:
              <input {...register("lastName")} />
            </label>
            <label>
              Email:
              <input {...register("email")} type="email" />
            </label>
            <label>
              Phone number:
              <input {...register("phoneNumber")} type="number" />
            </label>

            <button type="submit" value="submit" className="item-detail-button">
              Submit
            </button>
          </form>
          {orderReady && <ChildModal parentData={data} />}
        </Box>
      </Modal>
    </div>
  );
}

function ChildModal(data) {
  const [open, setOpen] = useState(true);

  // data
  const { parentData } = data;
  const { buyerData, handleCloseParent } = parentData;
  const { firstName, lastName, email, phoneNumber } = buyerData;
  const [orderId, setOrderId] = useState("");

  const handleCloseChild = () => {
    setOpen(false);
    handleCloseParent(false);
    // TODO: ir a otra pagina
  };

  useEffect(() => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    getDocs(ordersCollection).then((snapshot) => {
      const orderIdAux = snapshot.docs[0].id;
      setOrderId(orderIdAux);
    });
  }, []);

  return (
    <>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleCloseChild}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2>Successfully purchased!</h2>
          <h3>Your Purchase Resume:</h3>

          <p>
            <b>Order ID:</b> {orderId}
          </p>

          <h3>Booking Description:</h3>

          <h3>Your contact data:</h3>
          <p>
            <b>First Name:</b> {firstName}
          </p>
          <p>
            <b>Last Name:</b> {lastName}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
          <p>
            <b>Phone Number:</b> {phoneNumber}
          </p>

          <button onClick={handleCloseChild} className="item-detail-button">
            Confirm purchase
          </button>
        </Box>
      </Modal>
    </>
  );
}
