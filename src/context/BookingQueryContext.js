import { createContext, useState } from "react";

const BookingQueryContext = createContext();

const BookingQueryProvider = ({ children }) => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestsQuantity, setguestsQuantity] = useState(0);

  const addDestination = (dest) => {
    setDestination(dest);
  };

  const addCheckInDate = (date) => {
    setCheckInDate(date);
  };

  const addCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  const addGuestsToQuery = () => {
    setguestsQuantity(guestsQuantity + 1);
  };

  const removeGuestsFromQuery = () => {
    setguestsQuantity(guestsQuantity - 1);
  };

  const data = {
    destination,
    addDestination,
    checkInDate,
    addCheckInDate,
    checkOutDate,
    addCheckOutDate,
    guestsQuantity,
    addGuestsToQuery,
    removeGuestsFromQuery,
  };

  return (
    <BookingQueryContext.Provider value={data}>
      {children}
    </BookingQueryContext.Provider>
  );
};

export { BookingQueryProvider };
export default BookingQueryContext;
