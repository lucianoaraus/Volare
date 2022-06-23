import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import MenuGuests from "../guests/MenuGuests";
import DatePickerSelector from "../date-picker/DatePickerSelector";

//Const
import ERROR_TYPES from "../../const/constants";

//Context
import BookingQueryContext from "../context/BookingQueryContext";
import ErrorContext from "../context/ErrorContext";

//Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

import "./booking-item-selector.css";

function BookingItemSelector() {
  const navigate = useNavigate();
  const { addDestination, addCheckInDate, addCheckOutDate, guestsQuantity } =
    useContext(BookingQueryContext);

  const { handleError, resetError } = useContext(ErrorContext);

  const notGuestsEnought = () => {
    if (0 < guestsQuantity && guestsQuantity < 5) {
      navigate("/booking/items");
      resetError();
    } else {
      handleError(ERROR_TYPES.Quantity);
    }
  };

  return (
    <div className="item-selector-container">
      <div className="options-selector">
        <div className="destination-item" role="button">
          <div className="left-selector">
            <LocationOnIcon sx={{ fontSize: 32 }} />
          </div>
          <div className="mid-selector">
            <h3>Destinations</h3>
            <input
              type="text"
              name="destination"
              placeholder="Where are you going?"
              onChange={(event) => addDestination(event.target.value)}
            />
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
            <DatePickerSelector
              onChange={(date) => addCheckInDate(date)}
              type="text"
              name="checkIn"
            />
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
            <DatePickerSelector
              onChange={(date) => addCheckOutDate(date)}
              type="text"
              name="checkOut"
            />
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
            <MenuGuests type="number" name="guests" />
          </div>
          <div className="right-selector">
            <button className="down-arrow">
              <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
            </button>

            <button
              className="button-4"
              onClick={notGuestsEnought}
              type="submit"
            >
              <SearchIcon sx={{ fontSize: 32 }} />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingItemSelector;
