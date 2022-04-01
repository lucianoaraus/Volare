import React from "react";

import "./item-detail.css";

function ItemDetail(props) {
  const { data } = props;

  return (
    <>
      {data == undefined ? (
        "loading..."
      ) : (
        <div className="item-detail-child-container">
          <div className="title">
            <h2>{data.Airline}</h2>
          </div>
          <div className="sub-title">
            <p>
              Origin: <u>{data.Origin}</u>
            </p>
            <p>
              Destiny: <u>{data.Destiny}</u>
            </p>
          </div>
          <div className="img-container">
            <img src={data.Img} className="img-detail" />
          </div>
          <div className="description-container">
            <div className="description-left-side">
              <h3>SeatClass: {data.SeatClass}</h3>
              <p>Passengers: {data.Passengers}</p>
              <p>Baggage: {data.Baggage}</p>
            </div>
            <div className="description-right-side">
              <div className="description-detail-right-side">
                <h3>$ {data.Price}</h3>
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
