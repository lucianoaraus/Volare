import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { sendOrder, getLastOrder } from "../../helpers/sendOrder";
import loading from "../../../assets/loading.gif";
import "./item-detail.css";

// payment
import masterCard from "../../../assets/master-card.svg";

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};

const normalizeCVC = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 3) || ""
  );
};

// TODO:
//const normalizeCardDate = (value) => {};

const datesDifference = (date1, date2) => {
  const dateDataType1 = new Date(date1);
  const dateDataType2 = new Date(date2);

  const date1UTC = Date.UTC(
    dateDataType1.getFullYear(),
    dateDataType1.getMonth(),
    dateDataType1.getDate()
  );
  const date2UTC = Date.UTC(
    dateDataType2.getFullYear(),
    dateDataType2.getMonth(),
    dateDataType2.getDate()
  );

  const day = 1000 * 60 * 60 * 24;

  return (date2UTC - date1UTC) / day;
};

const totalPrice = (item) => {
  const totalNights = datesDifference(item.checkIn, item.checkOut);
  const nightPrice = item.nightPrice;
  return nightPrice * totalNights;
};

function ItemDetail(props) {
  const { register, handleSubmit } = useForm();
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
    //al haber 2 setState el componente se renderiza x2 -> arreglar
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

  return (
    <>
      {data === undefined ? (
        <img src={loading} style={{ width: 400, height: 300 }} alt="loading" />
      ) : (
        <div className="item-detail-child-container">
          <div className="left-side-container">
            <div className="ls-column">
              {/* order resume */}
              <div className="ls-side-text">
                <h2>Confirm and pay</h2>
                <h3>Your booking</h3>
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
                    <>
                      <h3>Your contact data</h3>
                      <p>First name: {firstName}</p>
                      <p>Last name: {lastName}</p>
                      <p>Email: {email}</p>
                      <p>Phone: {phoneNumber}</p>

                      <h3>Order id</h3>
                      {orderId ? (
                        <p>{orderId}</p>
                      ) : (
                        <img
                          src={loading}
                          style={{ width: 400, height: 300 }}
                          alt="loading"
                        />
                      )}
                    </>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmitPayment)}
                      className="ls-side-detail form"
                    >
                      <b>Email</b>
                      <input
                        {...register("buyerEmail")}
                        placeholder="Email"
                        type="email"
                        className="form-input"
                      />
                      <b>Card information</b>
                      <div>
                        <input
                          {...register("cardNumber")}
                          placeholder="0000 0000 0000 0000"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="cc-number"
                          name="cardNumber"
                          id="cardNumber"
                          onChange={(event) => {
                            const { value } = event.target;
                            event.target.value = normalizeCardNumber(value);
                          }}
                          className="form-input"
                        />
                        <img
                          src={masterCard}
                          className="master-card-logo"
                          alt="mastercard"
                        />
                      </div>

                      <div className="card-information">
                        <input
                          {...register("dueDate")}
                          placeholder="MM/YY"
                          type="tel"
                          className="form-input input-date"
                          /* onChange={(event) => {
                          const { value } = event.target;
                          event.target.value = normalizeCardDate(value);
                        }} */
                        />
                        <input
                          {...register("cvc")}
                          placeholder="CVC"
                          type="number"
                          className="form-input input-cvc"
                          onChange={(event) => {
                            const { value } = event.target;
                            event.target.value = normalizeCVC(value);
                          }}
                        />
                      </div>

                      <b>Name on card</b>
                      <input
                        {...register("cardName")}
                        placeholder="Name"
                        className="form-input"
                      />
                      <button
                        type="submit"
                        value="submit"
                        className="submit-button"
                      >
                        Pay ${totalPrice(bookingItem)}
                      </button>
                    </form>
                  )
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmitContact)}
                    className="ls-side-detail form"
                  >
                    <h3>Contact data</h3>
                    <input
                      {...register("email")}
                      placeholder="Email"
                      type="email"
                      className="form-input"
                    />
                    <input
                      {...register("firstName")}
                      placeholder="First name"
                      className="form-input input-name"
                    />
                    <input
                      {...register("lastName")}
                      placeholder="Last name"
                      className="form-input input-lastname"
                    />
                    <input
                      {...register("phoneNumber")}
                      placeholder="Phone number"
                      type="number"
                      className="form-input"
                    />
                    <button
                      type="submit"
                      value="submit"
                      className="submit-button"
                    >
                      Submit
                    </button>
                  </form>
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
