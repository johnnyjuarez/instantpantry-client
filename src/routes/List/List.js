import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import config from '../../config';
import TokenService from '../../services/token-service'
import Item from '../../components/Item/Item'

export default function List(props) {

  const [items, setItems] = useState([]);


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
      console.log(data);
      setItems(data);
    })
  }, [])
  

  const renderList = items.map(item => {
    return <Item key={item.id} itemData={item} />
  })

  return (
    <div>
      <nav>
        <Link to='/dashboard'>Home</Link>
      </nav>
      <h1>List</h1>
      {renderList}
    </div>
  )
}
