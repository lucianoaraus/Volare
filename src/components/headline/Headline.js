import React from "react";
import img from "../../assets/travel-girl.png"

import "../headline/headline.css";

function Headline () {
  return (
    <div className="headline">
      <div className="headline-text">
        <h3>Best Destinations around the world</h3>
        <p>Ready for your next Adventure? Travel with Volare 🌍</p>
      </div>
      <img className="travel-girl" src={img}/>
    </div>
  );
}

export default Headline;

