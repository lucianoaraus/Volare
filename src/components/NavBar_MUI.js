import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

/*Icons*/
import Plane from "@mui/icons-material/Flight";
import Lodges from "@mui/icons-material/Hotel";
import Packages from "@mui/icons-material/TakeoutDining";
import Contact from "@mui/icons-material/Phone";

/*Styles */
import "../App.css";

function NavBar() {
  return (
    <Tabs className="NavBar" aria-label="icon label tabs example" centered>
      <Tab icon={<Plane />} label="Flights" />
      <Tab icon={<Lodges />} label="Lodges" />
      <Tab icon={<Packages />} label="Packages" />
      <Tab icon={<Contact />} label="Contact" />
    </Tabs>
  );
}

export default NavBar;
