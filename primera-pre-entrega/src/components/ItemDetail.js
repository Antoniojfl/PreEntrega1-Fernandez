import React from "react";
import './itemlistcontainer.css'

function ItemDetail ({photo, name, category, price, stock, longDescription}) {

  return (
    <div className="item-detail-container">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <p>Category: {category}</p>
      <p>Price: {price} $</p>
      <p>Stock: {stock}</p>
      <p>Full Description: {longDescription}</p>
    </div>
  );
};

export default ItemDetail