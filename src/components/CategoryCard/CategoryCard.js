import React from 'react'
import {useHistory} from 'react-router-dom'

import './CategoryCard.css'

export default function CategoryCard(props) {
  let history = useHistory();

  const viewItemsHandler = () => {
    history.push(`/category/${props.id}`)
  }

  const addItemHandler = () => {
    history.push(`/category/${props.id}/addItem`)
  }

  const deleteHandler = () => {
    alert('deleted');
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
