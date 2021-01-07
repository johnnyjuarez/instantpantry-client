import React from 'react'
import {useHistory} from 'react-router-dom'

import './CategoryCard.css'

export default function CategoryCard(props) {
  let history = useHistory();

  const viewItemsHandler = () => {
    history.push(`/category/${props.id}`)
  }
  return (
    <div className='categoryCard'>
      <h3>{props.title}</h3>
      <div className='btn-box'>
        <button onClick={viewItemsHandler}>View Items</button>
        <button>Add Item</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
