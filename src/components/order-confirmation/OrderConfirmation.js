import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { sendOrder, getLastOrder } from "../helpers/firebaseMethods";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import "./order-confirmation.css";
import loading from "../../assets/loading.gif";

import {
  datesDifference,
  totalPrice,
} from "../helpers/calculation-functions/calculationFunctions";

import ContactForm from "../forms/ContactForm";
import PaymentForm from "../forms/PaymentForm";
import PaymentReady from "../payment-ready/PaymentReady";

function OrderConfirmation() {
  const [booking, setBooking] = useState();
  const [orderReady, setOrderReady] = useState(false);
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [buyerData, setBuyerData] = useState({
    buyerEmail: "",
    cardNumber: "",
    dueDate: "",
    cvc: "",
    cardName: "",
  });
  const [orderId, setOrderId] = useState("");

  const { firstName, lastName, email, phoneNumber } = contactData;
  const { buyerEmail, cardNumber, dueDate, cvc, cardName } = buyerData;
  const { id } = useParams();

  const fullOrderData = { contactData, buyerData, booking };

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "booking-items");
    getDocs(itemsCollection).then((snapshot) => {
      setBooking(
        snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((i) => i.id === id)[0]
      );
    });
  }, [id]);

  const getOrderId = async () => {
    const lastOrderId = await getLastOrder();
    setOrderId(lastOrderId);
  };

  useEffect(() => {
    if (orderReady) {
      sendOrder(fullOrderData);
      getOrderId();
    }
  });

  const onSubmitContact = (e) => {
    setContactData(e);
  };

  const onSubmitPayment = (e) => {
    setBuyerData(e);
    setOrderReady(true);
  };

  const contactReady = () => {
    return (
      firstName !== "" && lastName !== "" && email !== "" && phoneNumber !== ""
    );
  };

  const paymentReady = () => {
    return (
      buyerEmail !== "" &&
      cardNumber !== "" &&
      dueDate !== "" &&
      cvc !== "" &&
      cardName !== ""
    );
  };

  const dataResume = { firstName, lastName, email, phoneNumber, orderId };

  return (
    <div className="order-parent-container">
      {booking === undefined ? (
        <img
          src={loading}
          style={{ width: 400, height: 300, margin: 100 }}
          alt="loading"
        />
      ) : (
        <div className="order-confirmation-child-container">
          <div className="left-side-container">
            <div className="ls-column">
              {/* order resume */}
              <div className="ls-side-text">
                {paymentReady() ? (
                  <h2>Your resume</h2>
                ) : (
                  <h2>Confirm and pay</h2>
                )}
                <h3>Booking</h3>
                <br />
                <section className="ls-side-detail">
                  <b>Period</b>
                  {booking.checkIn} to {booking.checkOut} (
                  {datesDifference(booking.checkIn, booking.checkOut)} nights)
                </section>
                <br />
                <section className="ls-side-detail">
                  <b>Check-in hour</b>
                  13:00 - 17:00
                </section>
                <br />
                <section className="ls-side-detail">
                  <b>Guests</b>
                  {booking.capacity} guests
                </section>
                <br />
                {contactReady() ? (
                  paymentReady() ? (
                    <PaymentReady data={dataResume} />
                  ) : (
                    <PaymentForm
                      onSubmit={(e) => onSubmitPayment(e)}
                      data={booking}
                    />
                  )
                ) : (
                  <ContactForm onSubmit={(e) => onSubmitContact(e)} />
                )}
              </div>
            </div>
          </div>
          {/* right column */}
          <div className="right-side-order-container">
            <div className="rs-column">
              <img
                src={booking.images[0]}
                alt="order-confirmation-img"
                className="img-resume"
              />
              <div className="side-text">
                Hotel Room
                <br />
                <b>
                  {booking.type} - {booking.hotelName}
                </b>
                <br />
                <br />
                <b>Price detail</b>
                <section className="side-detail">
                  <b>${booking.nightPrice} each night</b>
                  <b>${booking.nightPrice}</b>
                </section>
                <section className="side-detail">
                  <u>Service taxes</u>
                  <p>$0.00</p>
                </section>
                <section className="side-detail total">
                  <b>Total</b>
                  <b>${totalPrice(booking)}</b>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmation;
