import React, {useState} from 'react'
import config from '../../config';
import TokenService from '../../services/token-service';

export default function AddCategoryForm(props) {
  const user_id = localStorage.getItem('userId');
  const [catName, setCatName] = useState('');

  const catNameHandler = (e) => {
    setCatName(e.target.value);
  }

  const addCategorySubmitHandler = (e) => {
    e.preventDefault();
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

  return (
    <div>
      <h2>Add Category</h2>
      <form onSubmit={addCategorySubmitHandler}>
        <label>Category Title:</label>
        <input onChange={catNameHandler} type='text' />
        <input type='submit' />
      </form>
    </div>
  )
}
