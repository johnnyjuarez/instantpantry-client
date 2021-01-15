import React, {useState} from 'react'
import BarcodeScanner from '../BarcodeScanner/BarcodeScanner'

import './AddItem.css'

import {Link, useHistory} from 'react-router-dom';

export default function AddItem() {
  const [useForm, setUseForm] = useState(false);
  const [useCamera, setUseCamera] = useState(false);
  let history = useHistory();


  const onSubmitHandler = (e) => {
    e.preventDefault();
    history.push('/dashboard');
  }

  const formHTML = (
    <form onSubmit={onSubmitHandler} className='add-item-form'>
    <label>Item Name:</label>
    <input type='text' />
    <label>Amount:</label>
    <input type='text' />
    <label>Image:</label>
    <input type='text' />
    <input type='submit' />
  </form>
  )

  const camera = <BarcodeScanner />

  let renderForm = null;
  if(useForm) {
    renderForm = formHTML;
  } else if(useCamera) {
    renderForm = camera;
  }


  const onManualSelect = (e) => {
    setUseForm(true);
    setUseCamera(false);
  }

  const onCameraSelect = (e) => {
    setUseCamera(true);
    setUseForm(false);
  }

  return (
    <div>
      <Link to='/dashboard'>Home</Link>
      <h1 className='title'>Add Item</h1>
      <button onClick={onManualSelect}>Enter Manually</button>
      <button onClick={onCameraSelect}>Scan Barcode</button>
      {renderForm}
    </div>
  )
}
