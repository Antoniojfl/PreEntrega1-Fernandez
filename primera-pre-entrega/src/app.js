import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <ItemListContainer greeting="Hola !! Esta es la prop greeting"/>
  </React.StrictMode>,
)
