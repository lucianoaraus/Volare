import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(true);

  // para usar en el switch
  const handleTheme = () => {
    setLightTheme(!lightTheme);
    console.log("Funcion desde contexto");
  };

  const data = {
    lightTheme,
    handleTheme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider }; //proveera a los demas componentes (consumidores)
export default ThemeContext; // referencia del contexto creado

// El default es el principal del archivo y el otro export se debe llamar específicamente para poder utilizarlo (usando las llaves en el import)
// No pueden haber dos default, por lo que los otros export deben ser de la otra manera
