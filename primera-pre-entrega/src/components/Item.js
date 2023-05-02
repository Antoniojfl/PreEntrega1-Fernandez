import React from 'react'
import { NavLink } from 'react-router-dom';

function Item ({id, photo, name, category, price, stock, shortDescription}) {
  return (
    
        <NavLink to={'/item/'+id}>
          <img src={photo} alt={name} />
          <h3>{name}</h3>
          <p>Category: {category}</p>
          <p>Price: {price} $</p>
          <p>Stock: {stock}</p>
          <p>Description: {shortDescription}</p>
        </NavLink>
    
  );
}

export default Item;