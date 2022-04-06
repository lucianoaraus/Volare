import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const data = { cartProducts, addProductToCart };

  const addProductToCart = (producto) => {
    console.log("Producto a agregar: ", producto);
    //setCartProducts();
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider }; //proveera a los demas componentes (consumidores)
export default CartContext;

// Luciano, porque en uno estás compartiendo el componente que va a ser el proveedor del contexto,
// y el otro solamente estás mandando la referencia del contexto creado. El default es el principal del archivo y el otro export lo debes llamar específicamente para poder utilizarlo
// (usando las llaves en el import)

// Lo que pasa es que no pueden haber dos default, por lo que los otros export deben ser de la otra manera
