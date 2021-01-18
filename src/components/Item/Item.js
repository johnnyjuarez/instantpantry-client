import React, { useState } from 'react';
import config from '../../config';
import { withRouter } from 'react-router-dom';
import TokenService from '../../services/token-service';
import Modal from '../Modal/Modal';

function Item(props) {

  const [isEdit, setIsEdit] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const itemData = props.itemData;
  console.log(props);
  const categoryId = props.location.pathname.slice(10);


  const onDeleteHandler = (e) => {
    return fetch(`${config.API_ENDPOINT}/items/${categoryId}/${itemData.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
  }

  const submitEditHandler = (e) => {
    e.preventDefault();
    let payload = {
      item_name: newItemName,
      amount: newAmount
    }
    return fetch(`${config.API_ENDPOINT}/items/${categoryId}/${itemData.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(payload)
    })
      .then(() => {
        setIsEdit(false);
      })
  }

  const editItemHandler = () => {
    setIsEdit(!isEdit);
  }

  const editItemHTML = (
    <Modal open={isEdit} onClose={editItemHandler}>

      <form onSubmit={submitEditHandler}>
        <label>Item Name:</label>
        <input onChange={(e) => { setNewItemName(e.target.value) }} type='text' defaultValue={itemData.item_name} />
        <label>Amount:</label>
        <input onChange={(e) => { setNewAmount(e.target.value) }} type='text' defaultValue={itemData.amount} />
        <input type='submit' />
      </form>
    </Modal>
  )


  // conditional rendering based on image property
  let renderHTML;

  if (itemData.image) {
    renderHTML = (
      <div>
        <h3>{itemData.item_name}</h3>
        <p>Amount : {itemData.amount}</p>
        <img src={itemData.image} alt={itemData.item_name} />
        <div>
          <button onClick={editItemHandler}>Edit</button>
          <button onClick={onDeleteHandler}>Delete</button>
          {editItemHTML}
        </div>
      </div>
    )
  } else {
    renderHTML =
      (
        <div>
          <h3>{itemData.item_name}</h3>
          <p>Amount : {itemData.amount}</p>
          <div>
            <button onClick={editItemHandler}>Edit</button>
            <button onClick={onDeleteHandler}>Delete</button>
            {editItemHTML}
          </div>
        </div>
      )

  }

  return renderHTML;
}
export default withRouter(Item);