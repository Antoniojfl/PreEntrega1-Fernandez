import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element= {<ItemListContainer />}/>
        <Route path="/category/:id" element= {<ItemListContainer />}/>
        <Route path="/item/:id" element= {<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
