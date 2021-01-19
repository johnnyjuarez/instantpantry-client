import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config';
import TokenService from '../../services/token-service'
import Item from '../../components/Item/Item'
import Nav from '../../components/Nav/Nav'

export default function List(props) {

  const [items, setItems] = useState([]);
  const [update, setUpdate] = useState(false);

  const idFromPath = props.location.pathname;
  const category_id = idFromPath.slice(10);
  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/items/${category_id}`, {
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setItems(data);
      })
  }, [update])

  const updateRender = () => {
    setUpdate(!update);
  }


  const renderList = items.map(item => {
    return <Item key={item.id} itemData={item} renderUpdate={updateRender} />
  })

  return (
    <div>
      <Nav />
      <h1 className='title'>Item List</h1>
      {renderList}
    </div>
  )
}
