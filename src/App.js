import React from "react";

import Header from "./components/header/Header";
import ItemList from "./components/item-list-container/ItemList"

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <h3>Welcome to Volare</h3>
      <p>Ready for your next adventure? Travel with Volare 🌍</p>
      <ItemList/>
    </div>
  );
}

export default App;

