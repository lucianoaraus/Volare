import { createContext, useState } from "react";

const CartWidgetContext = createContext();

const CartWidgetProvider = ({ children }) => {
  const [reserveInt, setReserveInt] = useState([]);
  const [reserveId, setReserveId] = useState();

  const addReserveToCart = (reserveExt) => {
    setReserveInt((reserveInt) => [...reserveInt, reserveExt]);
  };

  const removeReserveFromCart = (reserveExt) => {
    const newArrFiltered = reserveInt.filter(
      (reserve) => reserve.id !== reserveExt.id
    );
    setReserveInt(newArrFiltered);
  };

  const addReserveId = (reserveId) => {
    setReserveId(reserveId);
  };

  const reservesData = {
    reserveInt,
    addReserveToCart,
    removeReserveFromCart,
    addReserveId,
    reserveId,
  };

  return (
    <CartWidgetContext.Provider value={reservesData}>
      {children}
    </CartWidgetContext.Provider>
  );
};

export { CartWidgetProvider };
export default CartWidgetContext;
