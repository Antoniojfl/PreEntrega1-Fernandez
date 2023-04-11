import React from 'react'
import './itemlistcontainer.css'

function ItemListContainer ({greeting}) {
  return (
    <div className="item-list-container">
      <p>{greeting}</p>
    </div>
  );
}

export default ItemListContainer