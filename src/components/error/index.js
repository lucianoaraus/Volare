import React, { useContext } from "react";
import ErrorContext from "../context/ErrorContext";
import { getMessageFromError } from "./constants";
import "./error.css";

export default function Error() {
  const { error } = useContext(ErrorContext);

  return (
    <>
      {error && (
        <div className="error-container">
          <h3 className="error-text">{getMessageFromError(error)}</h3>
        </div>
      )}
    </>
  );
}
