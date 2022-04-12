import { createContext, useState } from "react";

const CartWidgetContext = createContext();

const CartWidgetProvider = ({ children }) => {
  const [reserveInt, setReserveInt] = useState([]);

  const addReserveToCart = (reserveExt) => {
    setReserveInt((reserveInt) => [...reserveInt, reserveExt]);
  };

  const removeReserveFromCart = (reserveExt) => {
    setReserveInt(
      reserveInt.filter((reserveInt) => reserveInt.id !== reserveExt.id)
    );
  };

  console.log("ReserveInt Array desde CartWidgetContext: ", reserveInt);

  const reservesData = {
    // reserves:
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
