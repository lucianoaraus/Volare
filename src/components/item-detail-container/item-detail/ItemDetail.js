import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { sendOrder, getLastOrder } from "../../helpers/firebaseMethods";

import "./item-detail.css";
import loading from "../../../assets/loading.gif";

import {
  datesDifference,
  totalPrice,
} from "../../helpers/calculation-functions/calculationFunctions";

import ContactForm from "../../forms/ContactForm";
import PaymentForm from "../../forms/PaymentForm";
import PaymentReady from "../../payment-ready/PaymentReady";

function ItemDetail(props) {
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
  const { data } = props;

  const bookingFilter = (data) => {
    return data.filter((item) => item.id === id)[0];
  };

  const bookingItem = data !== undefined && bookingFilter(data);

  const fullOrderData = { contactData, buyerData, bookingItem };

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
    <>
      {data === undefined ? (
        <img
          src={loading}
          style={{ width: 400, height: 300, margin: 100 }}
          alt="loading"
        />
      ) : (
        <div className="item-detail-child-container">
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
                  {bookingItem.checkIn} to {bookingItem.checkOut} (
                  {datesDifference(bookingItem.checkIn, bookingItem.checkOut)}
                  nights)
                </section>
                <br />
                <section className="ls-side-detail">
                  <b>Check-in hour</b>
                  13:00 - 17:00
                </section>
                <br />
                <section className="ls-side-detail">
                  <b>Guests</b>
                  {bookingItem.capacity} guests
                </section>
                <br />
                {contactReady() ? (
                  paymentReady() ? (
                    <PaymentReady data={dataResume} />
                  ) : (
                    <PaymentForm
                      onSubmit={(e) => onSubmitPayment(e)}
                      data={bookingItem}
                    />
                  )
                ) : (
                  <ContactForm onSubmit={(e) => onSubmitContact(e)} />
                )}
              </div>
            </div>
          </div>
          {/* right column */}
          <div className="right-side-container">
            <div className="rs-column">
              <img
                src={bookingItem.images[0]}
                alt="item-detail-img"
                className="img-detail"
              />
              <div className="side-text">
                Hotel Room
                <br />
                <b>
                  {bookingItem.type} - {bookingItem.hotelName}
                </b>
                <br />
                <br />
                <b>Price detail</b>
                <section className="side-detail">
                  <b>${bookingItem.nightPrice} each night</b>
                  <b>${bookingItem.nightPrice}</b>
                </section>
                <section className="side-detail">
                  <u>Service taxes</u>
                  <p>$0.00</p>
                </section>
                <section className="side-detail total">
                  <b>Total</b>
                  <b>${totalPrice(bookingItem)}</b>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
