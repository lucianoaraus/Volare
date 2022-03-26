import React from "react";
import Card from "../../card/Card"

import "../ItemList.css";

function ItemList() {
  const items = [
    {
      Airline: "Aerolineas Argentinas",
      Origin: "Buenos Aires, Argentina",
      Destiny: "Puerto Iguazu, Misiones",
      SeatClass: "Economic",
      Baggage: "Standard",
      Price: 30000,
      Passengers: 1,
      Seats: 20,
    },
    {
      Airline: "Fly Bondi",
      Origin: "Cordoba, Argentina",
      Destiny: "Buenos Aires, Argentina",
      SeatClass: "Economic",
      Baggage: "Medium",
      Price: 44000,
      Passengers: 2,
      Seats: 20,
    },
    {
      Airline: "Aerolineas Argentinas",
      Origin: "Bariloche, Rio Negro",
      Destiny: "Tierra del Fuego, Argentina",
      SeatClass: "Economic",
      Baggage: "Standard",
      Price: 160000,
      Passengers: 4,
      Seats: 20,
    },
  ];

  return (
    <div className="item-list">
      <Card
        airline={items[0].Airline}
        origin={items[0].Origin}
        destiny={items[0].Destiny}
        seatClass={items[0].SeatClass}
        baggage={items[0].Baggage}
        price={items[0].Price}
        passengers={items[0].Passengers}
        seats={items[0].Seats}
      />
    </div>
  );
};

export default ItemList;
