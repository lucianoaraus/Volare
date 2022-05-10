import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./item-detail.css";
import loading from "../../../assets/loading.gif";
import stars from "../../../assets/stars.png";

import {
  datesDifference,
  totalPrice,
} from "../../helpers/calculation-functions/calculationFunctions";

function ItemDetail(props) {
  const { id } = useParams();
  const { data } = props;

  const bookingFilter = (data) => {
    return data.filter((item) => item.id === id)[0];
  };

  const bookingItem = data !== undefined && bookingFilter(data);

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
            <div className="ls-top-container">
              <img
                src={bookingItem.images[0]}
                alt="item-detail-img"
                className="img-detail"
              />
            </div>
            <div className="ls-bottom-container">
              <div className="mid-side-card-item">
                <div className="title-mid-side">
                  <h3>{bookingItem.hotelName}</h3>
                  <img src={stars} alt="stars" />
                </div>
                <p>
                  <u>{`${bookingItem.location}, ${bookingItem.country}`}</u>
                </p>
                <br />
                <p>Capacity: {bookingItem.capacity}</p>
                <p>
                  <b>{bookingItem.type}</b>
                </p>
                <br />
                <br />
                <p className="class-p">{bookingItem.breakfast}</p>
                <p className="hot-p">Last {bookingItem.stock} on this amount</p>
              </div>
            </div>
          </div>
          <div className="right-side-container">
            <div className="rs-top-container">
              <p>Each night per bedroom</p>
              <h3>${bookingItem.nightPrice}</h3>
              <p>
                Total price ${totalPrice(bookingItem)} - (
                {datesDifference(bookingItem.checkIn, bookingItem.checkOut)}{" "}
                nights)
              </p>
              <p className="light-p">Taxes included</p>
              <Link to={`/booking/${bookingItem.id}/order-confirmation`}>
                <button className="item-detail-button">Buy now</button>
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
