import React from "react";

import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import ItemList from "./components/item-list-container/item-list/ItemList"

import "./app.css";


function App(){
  return (
    <div className="app">
      <Header />
      <Headline/>
      <ItemList/>
    </div>
  );
}

export default App;

