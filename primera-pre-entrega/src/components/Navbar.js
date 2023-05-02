import React from 'react'
import CartWidget from './CartWidget'
import './navbar.css'
import { NavLink } from 'react-router-dom'


function Navbar() {
  
    return (
        <header>
           <NavLink to="/" className="navbar-brand">SmartBuy</NavLink>
                <nav>
                    <ul className="nav__links">
                        <li>
                            <NavLink to="category/electronic">Electronic</NavLink>
                        </li>
                        <li>
                            <NavLink to="category/computer">Computer</NavLink>
                        </li>
                        <li>
                            <NavLink to="category/home-deco">Home & Deco</NavLink>
                        </li>
                    </ul>
                </nav>  
                <CartWidget />
        </header>
    )
  }
  
export default Navbar