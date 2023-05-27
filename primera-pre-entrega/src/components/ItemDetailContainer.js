import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getDocumentById } from '../service/firebase.service'
import './itemlistcontainer.css'

function ItemDetailContainer () {
  const fetchData = async (setItem, id) => {
    try {
      const product = await getDocumentById('products',id)
      setItem(product);
    } catch (error) {
      console.error(error);
    }
  };

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
      <ItemDetail {...item[0]} />
    </div>
  );
}

export default ItemDetailContainer