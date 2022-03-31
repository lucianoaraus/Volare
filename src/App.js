import React, { useState } from "react";

import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import ItemSelector from "./components/item-selector/ItemSelector";
import ItemDetailContainer from "./components/item-detail-container/ItemDetailContainer";

import "./app.css";

function App() {
  const [state, setState] = useState(false);

  // == handleOpen
  const changeLayout = () => {
    setState(!state);
  };

  return (
    <div className="app">
      <Header />
      <Headline />
      <h3>
        CLICK ON THE <b>"SEARCH ICON"</b> TO SHOW AVAILABLE OPTIONS
      </h3>
      {/* {state ? (
        <ItemListContainer callBack={() => changeLayout()} />
      ) : (
        <ItemSelector callBack={() => changeLayout()} />
      )} */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
