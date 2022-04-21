import React, { useContext, useState } from "react";

import MenuGuests from "../menu/MenuGuests";
import BookingQueryContext from "../context/BookingQueryContext";
import DatePickerSelector from "../date-picker/DatePickerSelector";

import { useNavigate } from "react-router-dom";

//Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

import "./booking-item-selector.css";

function BookingItemSelector() {
  const navigate = useNavigate();

  // form query:
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const { guestsQuantity } = useContext(BookingQueryContext);

  // WIP:
  const [query, setQuery] = useState({
    queryDestination: "",
    queryCheckInDate: "",
    queryCheckOutDate: "",
    queryGuests: "",
  });

  const notGuestsEnought = () => {
    // TODO: Arreglar esto
    0 < guestsQuantity && guestsQuantity < 5
      ? navigate("/booking/items")
      : alert(
          "You must to add a valid quantity of Guests (for example 2 or 4)"
        );
  };

  const handleSubmit = () => {
    setQuery({
      queryDestination: "",
      queryCheckInDate: "",
      queryCheckOutDate: "",
      queryGuests: "",
    });
  };

  console.log(
    `Destionation: ${destination}, Check-In: ${checkInDate}, Check-Out: ${checkOutDate}, Guests: ${guestsQuantity}`
  );

  return (
    <div className="item-selector-container">
      <form onSubmit={handleSubmit}>
        <div className="options-selector">
          <div className="destination-item" role="button">
            <div className="left-selector">
              <LocationOnIcon sx={{ fontSize: 32 }} />
            </div>
            <div className="mid-selector">
              <h3>Destinations</h3>
              <input
                type="text"
                id="destination"
                placeholder="Where are you going?"
                onChange={(event) => setDestination(event.target.value)}
              ></input>
            </div>
            <button className="down-arrow">
              <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
            </button>
          </div>

          <div className="date-item" role="button">
            <div className="left-selector">
              <CalendarMonthIcon sx={{ fontSize: 32 }} />
            </div>
            <div className="mid-selector">
              <h3>Check-in</h3>
              <DatePickerSelector onChange={(date) => setCheckInDate(date)} />
            </div>
            <button className="down-arrow">
              <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
            </button>
          </div>

          <div className="date-item" role="button">
            <div className="left-selector">
              <CalendarMonthIcon sx={{ fontSize: 32 }} />
            </div>
            <div className="mid-selector">
              <h3>Check-out</h3>
              <DatePickerSelector onChange={(date) => setCheckOutDate(date)} />
            </div>
            <button className="down-arrow">
              <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
            </button>
          </div>

          <div className="guest-item" role="button">
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
      </form>
    </div>
  );
}

export default BookingItemSelector;
