import React, { useContext, useState } from "react";
import { NavLink, useParams } from 'react-router-dom'
import { CartContext } from "../context/cartContext";
import './itemlistcontainer.css'

function ItemDetail ({photo, name, category, price, stock, longDescription}) {
  const {id} = useParams()
  const [itemQuantity,setItemQuantity] = useState(1)
  const [isAddToCart, setIsAddToCart] = useState(false)

  const {addToCart} = useContext(CartContext)

  const handleAddItemQuantity = () => {
    itemQuantity < stock && setItemQuantity(itemQuantity+1)
  }

  const handleSubstractItemQuantity = () => {
    itemQuantity > 1  && setItemQuantity(itemQuantity-1)
  }

  const handleIsAddToCart = () => {
    if(!isAddToCart){
      setIsAddToCart(true)
      addToCart({id,name, price, itemQuantity})
    }else{
      setIsAddToCart(false) 
    }    
  }

  return (
    <div className="item-detail-container">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <p>Category: {category}</p>
      <p>Price: {price} $</p>
      <p>Stock: {stock}</p>
      <p>Full Description: {longDescription}</p>
      {!isAddToCart ? (
        <div className="container">
          <button
            className="quantity-button decrease"
            onClick={handleSubstractItemQuantity}
          >
            -
          </button>
          <div className="counter">{itemQuantity}</div>
          <button
            className="quantity-button increase"
            onClick={handleAddItemQuantity}
          >
            +
          </button>
          <button className="add-to-cart-button" onClick={handleIsAddToCart}>
            Add to Cart
          </button>
        </div>
      ) : (
        <div>
        <button className="add-to-cart-button" onClick={handleIsAddToCart} > Seguir Comprando </button>
        <NavLink to="/cart">
          <button className="add-to-cart-button" > Terminar Compra </button>
        </NavLink>
        </div> 
      )}
    </div>
  );
};

export default ItemDetail