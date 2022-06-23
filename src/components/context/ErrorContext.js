import { createContext, useState } from "react";

const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const handleError = (err) => {
    console.log(`err: ${err}`);
    setError(err);
  };

  const cleanError = () => {
    setError(null);
  };

  const data = {
    error,
    handleError,
    cleanError,
  };

  return <ErrorContext.Provider value={data}>{children}</ErrorContext.Provider>;
};

export { ErrorProvider };
export default ErrorContext;
