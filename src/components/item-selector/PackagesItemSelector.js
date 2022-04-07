import React from "react";

//Icons
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

function PackagesItemSelector(props) {
  // WIP
  // - Estructura del HTML
  // - Correccion de estilos

  const { callBack } = props;

  return (
    <div className="item-selector-container">
      <div className="options-selector from-destination-item">
        <div className="left-selector">
          <FlightTakeoffIcon sx={{ fontSize: 28 }} />
        </div>
        <div className="mid-selector">
          <h3>From</h3>
          <p>Where are you from?</p>
        </div>
        <button className="down-arrow">
          <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
        </button>
      </div>
      <div className="options-selector to-destination-item">
        <div className="left-selector">
          <FlightLandIcon sx={{ fontSize: 28 }} />
        </div>
        <div className="mid-selector">
          <h3>To</h3>
          <p>Where are you going?</p>
        </div>
        <button className="down-arrow">
          <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
        </button>
      </div>

      <div className="options-selector date-item">
        <div className="left-selector">
          <CalendarMonthIcon sx={{ fontSize: 28 }} />
        </div>
        <div className="mid-selector">
          <h3>When</h3>
          <p>Date from</p>
        </div>
        <button className="down-arrow">
          <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
        </button>
      </div>

      <div className="options-selector guest-item">
        <div className="left-selector">
          <PersonOutlineIcon sx={{ fontSize: 28 }} />
        </div>
        <div className="mid-selector">
          <h3>Guests</h3>
          <p>0</p>
        </div>

        <div className="right-selector">
          <button className="down-arrow">
            <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
          </button>
          <button onClick={() => callBack()} className="button-4">
            <SearchIcon sx={{ fontSize: 32 }} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackagesItemSelector;
