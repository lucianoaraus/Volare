import React from "react";

import { BookingQueryProvider } from "./components/context/BookingQueryContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.js";
import Headline from "./components/headline/Headline";
import Cart from "./components/cart/Cart";

import BookingItemSelector from "./components/item-selector/BookingItemSelector";
import FlightItemSelector from "./components/item-selector/FlightItemSelector";
import PackagesItemSelector from "./components/item-selector/PackagesItemSelector";

import ItemListContainer from "./components/item-list-container/ItemListContainer";
import ItemDetailContainer from "./components/item-detail-container/ItemDetailContainer";

import "./App.css";

// Consideraciones
// - La seccion de Booking es la principal por defecto (item del header + buscador)
// Precondiciones
// - Si se quiere cambiar de seccion (desde el header), se cambiara el color del item seleccionado y el buscador se reemplazara (con una transicion lateral) por el buscador respectivo
// - Si se cambia de seccion, la ruta debe seguir siendo la misma ("/")
// - Si se selecciona u n item de la itemList, se debe ir al itemDetail del producto seleccionado (/categories/:itemId)

function App() {
  return (
    <BookingQueryProvider>
      <BrowserRouter>
        <Header />
        <Headline />
        <Routes>
          {/* La seccion de booking es la home por defecto */}
          <Route exact path="/" element={<BookingItemSelector />} />
          <Route exact path="/booking" element={<BookingItemSelector />} />
          <Route exact path="/flights" element={<FlightItemSelector />} />
          <Route exact path="/packages" element={<PackagesItemSelector />} />
          <Route exact path="/booking/items" element={<ItemListContainer />} />
          <Route exact path="/booking/:id" element={<ItemDetailContainer />} />
          <Route exact path="/login" element={<></>} /> {/* TODO */}
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BookingQueryProvider>
  );
}

export default App;
