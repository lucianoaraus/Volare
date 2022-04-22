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

export { BookingQueryProvider }; //proveera a los demas componentes (consumidores)
export default BookingQueryContext;

// En uno estás compartiendo el componente que va a ser el proveedor del contexto,
// y el otro solamente estás mandando la referencia del contexto creado. El default es el principal del archivo y el otro export lo debes llamar específicamente para poder utilizarlo
// (usando las llaves en el import)

// Lo que pasa es que no pueden haber dos default, por lo que los otros export deben ser de la otra manera
