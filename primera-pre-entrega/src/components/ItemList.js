import React from 'react'
import Item from './Item'

function ItemList ({item}) {
  return (
      <Item {...item} />    
  );
}

export default ItemList

