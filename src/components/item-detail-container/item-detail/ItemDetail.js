import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { sendOrder } from "../../helpers/sendOrder";
import loading from "../../../assets/loading.gif";
import "./item-detail.css";

function ItemDetail(props) {
  const { register, handleSubmit } = useForm();
  const [orderReady, setOrderReady] = useState(false);
  const [buyerData, setBuyerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const { firstName, lastName, email, phoneNumber } = buyerData;
  const { id } = useParams();
  const { data } = props;

  const bookingFilter = (data) => {
    return data.filter((item) => item.id === id)[0];
  };
  const bookingItem = data !== undefined && bookingFilter(data);

  const fullOrderData = { buyerData, bookingItem };

  useEffect(() => {
    orderReady && sendOrder(fullOrderData);
  });

  const onSubmit = (e) => {
    //al haber 2 setState el componente se renderiza x2, arreglar
    setBuyerData(e);
    setOrderReady(true);
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
                <h2>Confirma y paga</h2>
                <h3>Tu viaje</h3>
                <br />
                <section className="ls-side-detail">
                  <b>Fechas</b>
                  26 de abr. al 4 de may.
                </section>
                <br />
                <section className="ls-side-detail">
                  <b>Hora del Check-in</b>
                  13:00 - 17:00
                </section>
                <br />
                <section className="ls-side-detail">
                  <b>Viajeros</b>2 viajeros
                </section>
                <br />
                {orderReady ? (
                  <>
                    <h3>Tus datos</h3>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{email}</p>
                    <p>{phoneNumber}</p>

                    <h3>Order id</h3>
                    <p></p>
                  </>
                ) : (
                  // contact form
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="ls-side-detail form"
                  >
                    <h3>Tus datos</h3>
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
                Habitacion del hotel
                <br />
                <b>Habitacion Doble - Hotel Roma Italia</b>
                <br />
                <br />
                <b>Detalle del precio</b>
                <section className="side-detail">
                  <b>$52.577 por 3 noches</b>
                  <b>$52.577</b>
                </section>
                <section className="side-detail">
                  <u>Tarifa por servicio</u>
                  <p>$0.00</p>
                </section>
                <section className="side-detail total">
                  <b>Total</b>
                  <b>$157.731</b>
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
