import React from "react";
import img from "../../assets/travel-girl.png";

import "../headline/headline.css";

function Headline() {
  return (
    <div className="headline">
      <img className="travel-girl" src={img} alt="travel-girl" />
      <div className="headline-text">
        <h3>Best Destinations around the world</h3>
        <p className="headline-subtitle">
          Ready for your next Adventure? Travel with Volare
        </p>
        <p className="headline-detail">
          Find the Ideal Lodging for your Trip. Compare Prices and Save with
          Volare! Are you looking for Hotel? Volare
        </p>
      </div>
    </div>
  );
}

export default Headline;
