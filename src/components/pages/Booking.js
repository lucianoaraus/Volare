import React from "react";
import Headline from "../headline/Headline";
import Error from "../error";
import BookingItemSelector from "../item-selector/BookingItemSelector";

function Booking() {
  return (
    <>
      <Headline />
      <BookingItemSelector />
      <Error />
    </>
  );
}

export default Booking;
