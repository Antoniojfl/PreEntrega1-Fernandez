import React, { useContext } from 'react'
import cartimg from '../assets/shopping-cart.png'
import { CartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom';

function CartWidget () {

  const {cartList} = useContext(CartContext);
  const totalItemsInCart = cartList.reduce((sum, item) => sum + item.itemQuantity, 0)
  return (
    <>
      {cartList.length === 0 ? 
        <></>
      :
      <NavLink to="/cart">
        <div className="cart">
                <img src={cartimg} alt="Shopping Cart" />
                <span className="cart-counter">{totalItemsInCart}</span>
        </div>
      </NavLink>
      
      }
    </>
  )
}

export default CartWidget