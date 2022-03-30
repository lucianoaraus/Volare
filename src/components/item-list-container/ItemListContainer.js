import React, {useState, useEffect} from "react";

import ItemList from "../item-list-container/item-list/ItemList"

import "./item-list-container.css";

function ItemListContainer(props) {

  const {callBack} = props
  const [products, setProducts] = useState([])

  const mockProducts = [
    {
      Id: 0,
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
      Id: 1,
      Airline: "Fly Bondi",
      Origin: "Cordoba, Argentina",
      Destiny: "Buenos Aires, Argentina",
      SeatClass: "Economic",
      Baggage: "Medium",
      Price: 44000,
      Passengers: 2,
      Seats: 12,
    },
    {
      Id: 2,
      Airline: "Aerolineas Argentinas",
      Origin: "Bariloche, Rio Negro",
      Destiny: "Tierra del Fuego, Argentina",
      SeatClass: "Economic",
      Baggage: "Standard",
      Price: 160000,
      Passengers: 4,
      Seats: 4,
    },]

  // TODO: 
  //  - API Fetch
  //  - una vez obtenidos los items, se le pasaran al ItemList por props.

  // 2. se crea una nueva promesa para obtener los datos del mock despues del timeout
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(mockProducts)
      }, 2000);
    })
  };
  

  // 3. se hace uso del efecto del componente para llamar a la promesa y asi obtener los datos para el estado
  useEffect(() => {
    getProducts().then( (products) => {
      setProducts(products)
    }).catch( (error) => {
      console.log("Error: ", error)
    })
  },[])

  
  // 1. renderizado del componente -> Es lo primero en realizarlse. Luego pasa por el useEffect
  return (
    <div className="item-list-container">
      <ItemList products={products}/>
      <button onClick={() => callBack()} className="button-4">Go Back</button>
    </div>
  );
};

export default ItemListContainer;
