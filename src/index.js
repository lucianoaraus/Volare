import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxestAqlQ4MDEA7ZdOZQaeDd2bDKsopSM",
  authDomain: "ecommerce-volare.firebaseapp.com",
  projectId: "ecommerce-volare",
  storageBucket: "ecommerce-volare.appspot.com",
  messagingSenderId: "811813271272",
  appId: "1:811813271272:web:4027aea2cce36ef2ce3b5d",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
