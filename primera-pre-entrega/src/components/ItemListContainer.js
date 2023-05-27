import React, { useEffect, useState } from 'react'
import ItemList from './ItemList.js';
import './itemlistcontainer.css'
import { useParams } from 'react-router-dom';
import { getDocuments } from '../service/firebase.service.js';

const fetchData = async (setData, category) => {
  try {
    
    const products = await getDocuments('products')
    if(!category){
      setData(products);
    }else{
      const filteredProducts = products.filter( item => item.category == category)
      setData(filteredProducts);
    }
  } catch (error) {
    console.error(error);
  }
};

function ItemListContainer () {
  const [ data, setData ] = useState([]);
  const { category } = useParams()

  useEffect(() => {
    fetchData(setData,category);
  }, [category]);
   
  if (data.length == 0) {
    return (
      <div className="loader"></div>
    )
  }
  return (
    <div className="item-list-container">    
      {data.map((item) => (
        <div className="item-container" key={item.id}>
          <ItemList item={item} />
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer