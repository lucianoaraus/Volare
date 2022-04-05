import React from "react";

import Item from "../../item/Item";

function ItemList({ products }) {
  //Recibe Items por props para que luego se rendericen en el componente Item

  return (
    <div className="item-list">
      {products.map((product) => {
        return <Item data={product} key={product.Id} />;
      })}
    </div>
  );
}

export default ItemList;
