import React from "react";
import { useNavigate } from "react-router-dom";
import "../Header.css";

//Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlightIcon from "@mui/icons-material/Flight";
import FlashOnIcon from "@mui/icons-material/FlashOn";

function NavBar() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="nav-bar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="button-2" onClick={goToHome}>
            <LocationOnIcon sx={{ fontSize: 18 }} /> Booking
          </button>
        </li>
        <li className="nav-item">
          <button className="button-1">
            <FlightIcon className="rotate" sx={{ fontSize: 18 }} /> Flights
          </button>
        </li>
        <li className="nav-item">
          <button className="button-1">
            <FlashOnIcon sx={{ fontSize: 18 }} /> Packs
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
