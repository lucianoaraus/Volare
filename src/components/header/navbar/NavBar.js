import React from "react";
import './NavBar.css'

//Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlightIcon from '@mui/icons-material/Flight';
import FlashOnIcon from '@mui/icons-material/FlashOn';


const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <button class="button-2"><LocationOnIcon/> Booking</button>
        </li>
        <li class="nav-item">
          <button class="button-1"><FlightIcon/> Flights</button>
        </li>
        <li class="nav-item">
          <button class="button-1"><FlashOnIcon/> Packs</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;