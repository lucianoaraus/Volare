import React, {useState} from "react";

import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import ItemListContainer from "./components/item-list-container/ItemListContainer"
import ItemSelector from "./components/item-selector/ItemSelector";

import "./app.css";


function App(){

  const [state, setState] = useState(false)

  console.log(state);

  const changeLayout = () => {
    setState(!state)
  }

  return (
    
    <div className="app">
      <Header />
      <Headline/>
      <h3>CLICK ON THE "SEARCH ICON 🔍" TO SHOW AVAILABLE OPTIONS</h3>
      {
        state? <ItemListContainer callBack={() => changeLayout()}/> : <ItemSelector callBack={() => changeLayout()}/>
      }
    </div>
  );
}

export default App;

