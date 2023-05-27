import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartContext';
import './cart.css'
import { NavLink } from 'react-router-dom';

export const Cart = () => {
  const {cartList, removeList, deleteItem} = useContext(CartContext)
  const total = cartList.reduce((sum, item) => sum + item.price*item.itemQuantity, 0)
  const handleRemoveItem = (id) => {
    deleteItem(id)
  }

    const handleEmptyCart = () => {
      removeList()
    }
    
    return (
      <div className='cart-list-container'>
        <ul className="cart-list">
          {cartList.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="product-info">
                <h4 className="product-name">{item.name}</h4>
                <p className="quantity">Quantity: {item.itemQuantity}</p>
                <p className="price">Price per Unit: ${item.price}</p>
                <p className="subtotal">Subtotal: ${item.itemQuantity * item.price}</p>
              </div>
              <button className="clear-button" onClick={() => handleRemoveItem(item.id)}>Clear</button>
            </li>
          ))}
        </ul>
    
        {cartList.length === 0 ? (
          <>
            <h1 className="cart-h1">THE CART IS EMPTY!</h1>
            <NavLink to="/">
            <button className="cart-button" >Go back to products!</button>
            </NavLink>
          </>
        ) : (
          <div>
            <h1 className="cart-h1">Total: $ {total}</h1>
            <button className="cart-button" onClick={handleEmptyCart}>Empty Cart</button>
            <NavLink to="/checkout">
              <button className="cart-button" >Checkout</button>
            </NavLink>
          </div>
        )}
      </div>
    );
    }
