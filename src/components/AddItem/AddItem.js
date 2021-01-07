import React from 'react'

import './AddItem.css'

import {Link, useHistory} from 'react-router-dom';

export default function AddItem() {
  let history = useHistory();


  const onSubmitHandler = (e) => {
    e.preventDefault();
    history.push('/dashboard');
  }

  return (
    <div>
      <Link to='/dashboard'>Home</Link>
      <h1 className='title'>Add Item</h1>
      <form onSubmit={onSubmitHandler} className='add-item-form'>
        <label>Item Name:</label>
        <input type='text' />
        <label>Amount:</label>
        <input type='text' />
        <label>Image:</label>
        <input type='text' />
        <input type='submit' />
      </form>
    </div>
  )
}
