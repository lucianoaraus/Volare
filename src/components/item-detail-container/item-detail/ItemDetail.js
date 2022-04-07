import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import loading from "../../../assets/loading.gif";
import stars from "../../../assets/stars.png";
import "./item-detail.css";

function ItemDetail(props) {
  const { data } = props;

  // lo podemos utilizar para leer en js los parámetros de la ruta, en este caso, obtiene el id por la URL
  const { id } = useParams();

  return (
    <>
      {data === undefined ? (
        <img src={loading} style={{ width: 400, height: 300 }} alt="loading" />
      ) : (
        <div className="item-detail-child-container">
          <div className="left-side-container">
            <div className="ls-top-container">
              <img
                src={data[id].Images[0]}
                alt="item-detail-img"
                className="img-detail"
              />
            </div>
            <div className="ls-bottom-container">
              <div className="mid-side-card-item">
                <div className="title-mid-side">
                  <h3>{data[id].HotelName}</h3>
                  <img src={stars} alt="stars" />
                </div>
                <p>
                  <u>{`${data[id].Location}, ${data[id].Country}`}</u>
                </p>
                <br />
                <p>Capacity: {data[id].Capacity}</p>
                <p>
                  <b>{data[id].Type}</b>
                </p>
                <br />
                <br />
                <p className="class-p">{data[id].Breakfast}</p>
                <p className="hot-p">Last {data[id].Stock} on this amount</p>
              </div>
            </div>
          </div>
          <div className="right-side-container">
            <div className="rs-top-container">
              <p>Each night per bedroom</p>
              <h3>$ {data[id].NightPrice}</h3>
              <p>Total Price $(totalPrice)</p>
              <p className="light-p">Taxes included</p>
              <Link to={`/booking/${data[id].Id}`}>
                <button className="item-detail-button">View Details</button>
              </Link>
            </div>
            <div className="rs-bottom-container"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
