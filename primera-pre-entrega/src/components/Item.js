import React from 'react'
import { NavLink } from 'react-router-dom';

function Item ({id, photo, name, category, price, stock, shortDescription}) {
  return (
    
        <NavLink to={'/item/'+id}>
          <img src={photo} alt={name} width="200" height="200" />
          <h3>{name}</h3>
          <p>Category: {category}</p>
          <p>Price: {price} $</p>
          <p>Stock: {stock}</p>  
        </NavLink>
    
  );
}

export default Item;