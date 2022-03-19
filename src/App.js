import React from "react";

import Header from "./components/header/Header";
import ItemListContainer from "./components/item-list-container/ItemListContainer"

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <h3>Welcome to Volare</h3>
      <p>Ready for your next adventure? Travel with Volare 🌍</p>
      <ItemListContainer/>
    </div>
  );
}

