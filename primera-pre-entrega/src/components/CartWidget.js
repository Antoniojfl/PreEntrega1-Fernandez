import React from 'react'
import cartimg from '../assets/shopping-cart.png'

function CartWidget () {
  return (
    <div className="cart">
        <a href="#">
            <img src={cartimg} alt="Shopping Cart"/>
            <span className="cart-counter">5</span>
        </a>
    </div>
  )
}

export default CartWidget