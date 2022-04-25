import React, { useContext } from "react";

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
  const { addDestination, addCheckInDate, addCheckOutDate, guestsQuantity } =
    useContext(BookingQueryContext);

  // form query:
  //const [destination, setDestination] = useState("");
  //const [checkInDate, setCheckInDate] = useState("");
  //const [checkOutDate, setCheckOutDate] = useState("");

  // WIP:
  /*
  const [query, setQuery] = useState({
    queryDestination: "",
    queryCheckInDate: "",
    queryCheckOutDate: "",
    queryGuests: "",
  });

  const handleSubmit = () => {
    setQuery({
      queryDestination: "",
      queryCheckInDate: "",
      queryCheckOutDate: "",
      queryGuests: "",
    });
  };
  */

  const notGuestsEnought = () => {
    // TODO: arreglar esto
    0 < guestsQuantity && guestsQuantity < 5
      ? navigate("/booking/items")
      : alert(
          "You must to add a valid quantity of Guests (for example 2 or 4)"
        );
  };

  // TODO: Implementar el seteo de datos mediante un form (?)
  // ERR! -> Form submission canceled because the form is not connected

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
