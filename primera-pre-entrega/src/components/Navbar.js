import React from 'react'
import CartWidget from './CartWidget'
import './navbar.css'


function Navbar() {
  
    return (
        <header>
           <a href="#" className="navbar-brand">SmartBuy</a>
                <nav>
                    <ul className="nav__links">
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Computers</a></li>
                        <li><a href="#">Home & Deco</a></li>
                    </ul>
                </nav>  
                <CartWidget />
        </header>
    )
  }
  
  export default Navbar