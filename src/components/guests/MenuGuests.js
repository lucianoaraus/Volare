import React, { useContext } from "react";

import ItemCount from "../item-list-container/item-count/ItemCount";
import BookingQueryContext from "../context/BookingQueryContext";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./menu-guest.css";

export default function BasicMenu() {
  const { guestsQuantity } = useContext(BookingQueryContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-guest-container">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="menu-guest-button"
      >
        <h3>Guests</h3>
        {guestsQuantity > 0 ? <p>{guestsQuantity}</p> : <p>Add guests</p>}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem /* onClick={handleClose} */>
          <ItemCount />
        </MenuItem>
      </Menu>
    </div>
  );
}
