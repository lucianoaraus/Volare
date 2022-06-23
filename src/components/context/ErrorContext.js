import { createContext, useState } from "react";

const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const handleError = (err) => {
    console.log(`err: ${err}`);
    setError(err);
  };

  const resetError = () => {
    setError(null);
  };

  const data = {
    error,
    handleError,
    resetError,
  };

  return <ErrorContext.Provider value={data}>{children}</ErrorContext.Provider>;
};

export { ErrorProvider };
export default ErrorContext;
