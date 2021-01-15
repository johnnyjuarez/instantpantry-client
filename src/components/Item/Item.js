import React, {useState} from 'react'
// import Camera from '../Camera/Camera';

export default function Item(props) {

  const itemData = props.itemData;
  const image = null;


  return (
    <div>
      <h3>{itemData.item_name}</h3>
      <p>Amount : {itemData.amount}</p>
      {image}
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
