import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import CartWidgetContext from "../../context/CartWidgetContext";
import loading from "../../../assets/loading.gif";

import "./item-detail-copy.css";

function ItemDetailCopy(props) {
  const { data } = props;
  const { addReserveToCart } = useContext(CartWidgetContext);
  const { id } = useParams();

  const item = data !== undefined && data.filter((i) => i.id === id)[0];

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
                {/* contact form */}
                <form className="ls-side-detail form">
                  <h3>Tus datos</h3>
                  <input
                    placeholder="Correo electronico"
                    type="email"
                    className="form-input"
                  />
                  <input placeholder="Nombre" className="form-input" />
                  <input placeholder="Apellido" className="form-input" />
                  <input
                    placeholder="Telefono"
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
              </div>
            </div>
          </div>
          {/* right column */}
          <div className="right-side-container">
            <div className="rs-column">
              <img
                src={item.images[0]}
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

export default ItemDetailCopy;
