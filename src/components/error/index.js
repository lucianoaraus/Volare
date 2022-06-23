import React, { useContext } from "react";
import ErrorContext from "../context/ErrorContext";
import "./error.css";

export default function Error() {
  const { error } = useContext(ErrorContext);

  return (
    <>
      {error && (
        <div className="error-container">
          <h3 className="error-text">{error}</h3>
        </div>
      )}
    </>
  );
}
