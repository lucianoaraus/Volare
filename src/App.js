import React from "react";

import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import ItemListContainer from "./components/item-list-container/ItemListContainer"

import "./app.css";


function App(){
  return (
    <div className="app">
      <Header />
      <Headline/>
      <ItemListContainer/>
    </div>
  );
}

export default App;

