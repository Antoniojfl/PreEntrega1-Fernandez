import React from 'react'
import ReactDOM from 'react-dom/client'
import {Navbar} from './components/Navbar'
import {ItemListContainer} from './components/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer'
import {CartContextProvider} from './context/cartContext'
import {Checkout} from './components/Checkout'
import { Cart } from './components/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element= {<ItemListContainer />}/>
          <Route path="/category/:category" element= {<ItemListContainer />}/>
          <Route path="/item/:id" element= {<ItemDetailContainer />}/>
          <Route path="/cart" element= {<Cart />}/>
          <Route path="/checkout" element= {<Checkout />}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
) 
