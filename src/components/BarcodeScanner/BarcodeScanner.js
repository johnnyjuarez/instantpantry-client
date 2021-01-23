import React, { useState, useContext } from "react";
import Scanner from '../Scanner/Scanner'
import ItemContext from '../../itemContext';
import Spinner from '../Spinner/Spinner';
import { debounce } from 'throttle-debounce';

// import "./styles.css";
import './BarcodeScanner.css'

export default function BarcodeScanner() {
  const context = useContext(ItemContext);
  const [camera, setCamera] = useState(true);
  const [loading, setLoading] = useState(false)

  let onDetected = debounce(1000, (result) => {

    if (result) {
      setCamera(false);
      setLoading(true);
      fetch(`https://cors-anywhere.herokuapp.com/https://barcode.monster/api/${result}`)
        .then(res => {
          return res.json()
        })
        .then(data => {
          setLoading(false);
          context.passData(data);
        })
        .catch(err => {
          console.log('err out');
        });
      return;
    }
  });

  let startCameraHandler = () => {
    setCamera(!camera);
    context.resetData();
  }


  let renderHTML = (<div className="barcodeScanner">
    <button onClick={startCameraHandler}>
      {!camera ? 'start' : 'stop'}
    </button>
    <div className="container">
      {camera && <Scanner onDetected={onDetected} />}
    </div>
  </div>)

  if (loading) {
    renderHTML = <Spinner />
  }

  return renderHTML;
}