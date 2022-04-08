import React, { useContext } from "react";

import MenuGuests from "../menu/MenuGuests";
import BookingQueryContext from "../context/BookingQueryContext";

import { Link, Navigate, useNavigate } from "react-router-dom";

//Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

import "./booking-item-selector.css";

function BookingItemSelector() {
  const { guestsQuantity } = useContext(BookingQueryContext);
  const navigate = useNavigate();

  const notGuestsEnought = () => {
    // TODO: Arreglar esto
    0 < guestsQuantity && guestsQuantity < 5
      ? navigate("/booking/items")
      : alert(
          "You must to add a valid quantity of Guests (for example 2 or 4)"
        );
  };

  return (
    <div className="item-selector-container">
      <div className="options-selector destination-item" role="button">
        <div className="left-selector">
          <LocationOnIcon sx={{ fontSize: 32 }} />
        </div>
        <div className="mid-selector">
          <h3>Destinations</h3>
          <input
            type="text"
            id="nombre"
            placeholder="Where are you going?"
          ></input>
        </div>
        <button className="down-arrow">
          <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
        </button>
      </div>

      <div className="options-selector date-item" role="button">
        <div className="left-selector">
          <CalendarMonthIcon sx={{ fontSize: 32 }} />
        </div>
        <div className="mid-selector">
          <h3>Check-in</h3>
          <p>Add dates</p>
        </div>
        <button className="down-arrow">
          <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
        </button>
      </div>

      <div className="options-selector date-item" role="button">
        <div className="left-selector">
          <CalendarMonthIcon sx={{ fontSize: 32 }} />
        </div>
        <div className="mid-selector">
          <h3>Check-out</h3>
          <p>Add dates</p>
        </div>
        <button className="down-arrow">
          <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
        </button>
      </div>

      <div className="options-selector guest-item" role="button">
        <div className="left-selector">
          <PersonOutlineIcon sx={{ fontSize: 32 }} />
        </div>
        <div className="mid-selector">
          <MenuGuests />
        </div>
        <div className="right-selector">
          <button className="down-arrow">
            <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
          </button>

          <button className="button-4" onClick={notGuestsEnought}>
            <SearchIcon sx={{ fontSize: 32 }} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingItemSelector;
