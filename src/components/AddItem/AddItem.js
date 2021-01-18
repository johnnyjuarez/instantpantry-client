import React, { useState, useEffect, useContext } from 'react'
import BarcodeScanner from '../BarcodeScanner/BarcodeScanner'
import ItemContext from '../../itemContext';
import config from '../../config';
import TokenService from '../../services/token-service';

import './AddItem.css'

import { Link, useHistory, withRouter } from 'react-router-dom';

function AddItem(props) {
  const context = useContext(ItemContext);
  // console.log(props.barcode)
  const [useForm, setUseForm] = useState(false);
  const [useCamera, setUseCamera] = useState(false);
  const [barcode, setBarcode] = useState({});
  const [userAmount, setUserAmount] = useState('');
  const [itemName, setItemName] = useState('');
  let history = useHistory();


  const onSubmitHandler = (e) => {
    e.preventDefault();
    const path = props.history.location.pathname;
    const numPath = path.match(/\d/g);
    let payload = {
      item_name: itemName,
      amount: userAmount
    }
    fetch(`${config.API_ENDPOINT}/items/${numPath}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(payload)
    }).then(res => {
      return res.json();
    })
      .then(() => {
        context.resetData();
        setUseCamera(false);
        setUseForm(false);
      })
  }

  const onScanSubmitHandler = (e) => {
    e.preventDefault();
    const path = props.history.location.pathname;
    const numPath = path.match(/\d/g);
    let payload = {
      item_name: props.barcodeData.description,
      amount: userAmount,
      image: props.barcodeData.image_url,
      barcode: props.barcodeData.code
    }
    fetch(`${config.API_ENDPOINT}/items/${numPath}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(payload)
    }).then(res => {
      return res.json();
    })
      .then(() => {
        context.resetData();
        setUseCamera(false);
        setUseForm(false);
      })
  }

  const formHTML = (
    <form onSubmit={onSubmitHandler} className='add-item-form'>
      <label>Item Name:</label>
      <input onChange={(e) => { setItemName(e.target.value) }} type='text' />
      <label>Amount:</label>
      <input onChange={(e) => { setUserAmount(e.target.value) }} type='text' />
      <input type='submit' />
    </form>
  )

  const camera = <BarcodeScanner />

  let renderForm = null;
  if (useForm) {
    renderForm = formHTML;
  } else if (useCamera) {
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

  const amountChangeHandler = (e) => {
    setUserAmount(e.target.value);
  }

  if (props.barcodeData.class) {
    console.log('barcode prop', props.barcodeData)
    renderForm = (
      <form onSubmit={onScanSubmitHandler} className='add-item-form'>
        <label>Item Name:</label>
        <input type='text' defaultValue={props.barcodeData.description} />
        <label>Enter Amount:</label>
        <input onChange={amountChangeHandler} required={true} type='text' />
        <img src={props.barcodeData.image_url} alt={props.barcodeData.description} />
        <input type='submit' />
      </form>
    )
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
export default withRouter(AddItem);