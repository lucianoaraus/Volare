import { createContext, useState } from "react";

const CartWidgetContext = createContext();

const CartWidgetProvider = ({ children }) => {
  const [reserveInt, setReserveInt] = useState([]);

  const addReserveToCart = (reserveExt) => {
    setReserveInt((reserveInt) => [...reserveInt, reserveExt]);
  };

  const removeReserveFromCart = (reserveExt) => {
    const newArrFiltered = reserveInt.filter(
      (reserve) => reserve.id !== reserveExt.id
    );
    setReserveInt(newArrFiltered);
  };

  const reservesData = {
    reserveInt,
    addReserveToCart,
    removeReserveFromCart,
  };

  return (
    <CartWidgetContext.Provider value={reservesData}>
      {children}
    </CartWidgetContext.Provider>
  );
};

export { CartWidgetProvider };
export default CartWidgetContext;
