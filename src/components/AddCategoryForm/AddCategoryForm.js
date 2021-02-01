import React, { useState } from 'react'
import config from '../../config';
import TokenService from '../../services/token-service';

import './AddCategoryForm.css';

export default function AddCategoryForm(props) {
  const user_id = localStorage.getItem('userId');
  const [catName, setCatName] = useState('');
  const [error, setError] = useState(null);

  const catNameHandler = (e) => {
    setCatName(e.target.value);
  }

  const addCategorySubmitHandler = (e) => {
    e.preventDefault();
    if (catName.length < 1) {
      setError('Please enter a category');
    } else {
      let payload = {
        name: catName
      }
      fetch(`${config.API_ENDPOINT}/category/${user_id}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify(payload),
      })
        .then(() => {
          props.closeOnSubmit();
        })
    }
  }

  return (
    <div className='addCat-form'>
      <h2>Add Category</h2>
      <form onSubmit={addCategorySubmitHandler}>
        {error ? <p className='error'>{error}</p> : null}
        <label>Category Title:
        <input onChange={catNameHandler} type='text' />
        </label>
        <input className='addCat-submit' type='submit' />
      </form>
    </div>
  )
}
