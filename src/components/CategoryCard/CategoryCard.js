import React from 'react'
import {useHistory} from 'react-router-dom'
import TokenService from '../../services/token-service';

import config from '../../config';

import './CategoryCard.css'

export default function CategoryCard(props) {

  const user_id = localStorage.getItem('userId');

  let history = useHistory();

  const viewItemsHandler = () => {
    history.push(`/category/${props.id}`)
  }

  const addItemHandler = () => {
    history.push(`/category/${props.id}/addItem`)
  }

  const deleteHandler = () => {
    fetch(`${config.API_ENDPOINT}/category/${user_id}/${props.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(() => {
      props.onDelete();
    })
  }

  return (
    <div className='categoryCard'>
      <h3>{props.title}</h3>
      <div className='btn-box'>
        <button onClick={viewItemsHandler}>View Items</button>
        <button onClick={addItemHandler}>Add Item</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  )
}
