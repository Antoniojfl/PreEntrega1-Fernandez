import React, { useEffect, useState } from 'react'
import ItemList from './ItemList.js';
import getRandomMs from '../utils/utils.js';
import './itemlistcontainer.css'
import { useParams } from 'react-router-dom';
import listProductMock from '../mocks/itemListMock'

const fetchData = async (setData, id) => {
  try {
    const itemList = await new Promise((resolve) => {
      setTimeout(() => {
        (id && resolve(listProductMock.filter( item => item.category == id)) || resolve(listProductMock))
      }, getRandomMs());
    });
    setData(itemList);
  } catch (error) {
    console.error(error);
  }
};

function ItemListContainer () {
  const [data, setData] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    fetchData(setData,id);
  }, [id]);
   
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