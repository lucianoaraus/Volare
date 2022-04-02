import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.js";
import Headline from "./components/headline/Headline";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import BookingItemSelector from "./components/item-selector/BookingItemSelector";
import ItemDetailContainer from "./components/item-detail-container/ItemDetailContainer";

import "./app.css";

// Consideraciones
// - La seccion de Booking es la principal por defecto (item del header + buscador)
// Precondiciones
// - Si se quiere cambiar de seccion (desde el header), se cambiara el color del item seleccionado y el buscador se reemplazara (con una transicion lateral) por el buscador respectivo
// - Si se cambia de seccion, la ruta debe seguir siendo la misma ("/")
// - Si se selecciona u n item de la itemList, se debe ir al itemDetail del producto seleccionado (/categories/:itemId)

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Headline />
      <Routes>
        <Route exact path="/" element={<BookingItemSelector />} />{" "}
        {/* La seccion de booking es la home por defecto */}
        <Route
          exact
          path="/booking/items"
          element={<ItemListContainer />}
        />{" "}
        {/* Cuando  */}
        <Route
          exact
          path="/booking/:itemId"
          element={<ItemDetailContainer />}
        />
        <Route exact path="/flights/:itemId" element={<></>} />
        <Route exact path="/packs/:itemId" element={<></>} />
        <Route exact path="/login/" element={<></>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
