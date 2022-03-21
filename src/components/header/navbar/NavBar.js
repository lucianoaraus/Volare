import React from "react";
import Tab from "@mui/material/Tab";

/*Icons*/
import Plane from "@mui/icons-material/Flight";
import Lodges from "@mui/icons-material/Hotel";
import Packages from "@mui/icons-material/TakeoutDining";
import Contact from "@mui/icons-material/Phone";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Tab icon={<Plane />} label="Flights" />
      <Tab icon={<Lodges />} label="Lodges" />
      <Tab icon={<Packages />} label="Packages" />
      <Tab icon={<Contact />} label="Contact" />
    </div>
  );
}

export default NavBar;