import React from "react";
import { BookingQueryProvider } from "./context/BookingQueryContext";
import { ErrorProvider } from "./context/ErrorContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.js";

// pages
import Booking from "./components/pages/Booking";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import ItemDetailContainer from "./components/item-detail-container/ItemDetailContainer";
import OrderConfirmation from "./components/order-confirmation/OrderConfirmation";

import "./App.css";

function App() {
  return (
    <ErrorProvider>
      <BookingQueryProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Booking />} />
            <Route exact path="/booking" element={<Booking />} />
            <Route
              exact
              path="/booking/items"
              element={<ItemListContainer />}
            />
            <Route
              exact
              path="/booking/:id"
              element={<ItemDetailContainer />}
            />
            <Route
              exact
              path="/booking/:id/order-confirmation"
              element={<OrderConfirmation />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BookingQueryProvider>
    </ErrorProvider>
  );
}

export default App;
