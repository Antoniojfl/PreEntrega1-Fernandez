import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getRandomMs from '../utils/utils'
import ItemDetail from './ItemDetail'
import listProductMock from '../mocks/itemListMock'
import './itemlistcontainer.css'

const fetchData = async (setItem, id) => {
  try {
    const itemList = await new Promise((resolve) => {
      setTimeout(() => {
        (resolve(listProductMock.find( item => item.id == id)))
      }, getRandomMs());
    });
    setItem(itemList);
  } catch (error) {
    console.error(error);
  }
};

function ItemDetailContainer () {
  const [item, setItem] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetchData(setItem,id);
  }, [id]);

  if (item === null) {
    return (
      <div className="loader"></div>
    )
  }

  return (
    <div className="item-list-container">
      <ItemDetail {...item} />
    </div>
  );
}

export default ItemDetailContainer