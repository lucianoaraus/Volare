import { createContext, useState } from "react";

const BookingQueryContext = createContext();

const BookingQueryProvider = ({ children }) => {
  const [destination, setDestination] = useState<string>("");
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [guestsQuantity, setguestsQuantity] = useState<number>(0);

  const addDestination = (dest: string) => {
    setDestination(dest);
  };

  const addCheckInDate = (date: string) => {
    setCheckInDate(date);
  };

  const addCheckOutDate = (date: string) => {
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
