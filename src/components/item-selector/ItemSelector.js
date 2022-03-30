import React from "react";

import './item-selector.css'

//Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

function ItemSelector() {

  return (
    <div className="item-selector-container">
      <div className="options-selector destination-item">
        <div className="left-selector">
          <LocationOnIcon sx={{ fontSize: 32  }}/>
        </div>
        <div className="mid-selector">
          <h3>Destinations</h3>
          <p>Where are you going?</p>
        </div>
        <button className="down-arrow">
          <KeyboardArrowDownIcon sx={{ fontSize: 24  }}/>
        </button>
      </div>
      
      <div className="options-selector date-item">
        <div className="left-selector">
          <CalendarMonthIcon sx={{ fontSize: 32  }}/>
        </div>
        <div className="mid-selector">
          <h3>When</h3>
          <p>Date from</p>
        </div>
        <button className="down-arrow">
          <KeyboardArrowDownIcon sx={{ fontSize: 24  }}/>
        </button>
      </div>

      <div className="options-selector guest-item">
        <div className="left-selector">
          <PersonOutlineIcon sx={{ fontSize: 32  }}/>
        </div>
        <div className="mid-selector">
          <h3>Guests</h3>
          <p>0</p>
        </div>
        <div className="right-selector">
          <button className="down-arrow">
            <KeyboardArrowDownIcon sx={{ fontSize: 24  }}/>
          </button>
          <button className="button-4"><SearchIcon sx={{ fontSize: 32  }}/>Search</button>
        </div>
      </div>
    </div>
  );
};

export default ItemSelector;
