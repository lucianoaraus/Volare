import React from "react";
import { useParams } from "react-router-dom";

import loading from "../../../assets/loading.gif";
import "./item-detail.css";

function ItemDetail(props) {
  const { data } = props;

  // obtiene el id por la URL
  const { id } = useParams();

  return (
    <>
      {data == undefined ? (
        <img src={loading} style={{ width: 400, height: 300 }} />
      ) : (
        <div className="item-detail-child-container">
          <div className="title">
            <h2>{data[id].Airline}</h2>
          </div>
          <div className="sub-title">
            <p>
              Origin: <u>{data[id].Origin}</u>
            </p>
            <p>
              Destiny: <u>{data[id].Destiny}</u>
            </p>
          </div>
          <div className="img-container">
            <img src={data[id].Img} className="img-detail" alt="product-img" />
          </div>
          <div className="description-container">
            <div className="description-left-side">
              <h3>SeatClass: {data[id].SeatClass}</h3>
              <p>Passengers: {data[id].Passengers}</p>
              <p>Baggage: {data[id].Baggage}</p>
            </div>
            <div className="description-right-side">
              <div className="description-detail-right-side">
                <h3>$ {data[id].Price}</h3>
                <button className="button-4" style={{ margin: 0, padding: 0 }}>
                  Click Me
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
