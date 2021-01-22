import React, { useState, useContext } from "react";
import Scanner from '../Scanner/Scanner'
import ReactDOM from "react-dom";
import config from '../../config';
import ItemContext from '../../itemContext';
import { debounce } from 'throttle-debounce';

// import "./styles.css";
import './BarcodeScanner.css'

export default function BarcodeScanner() {
  const context = useContext(ItemContext);
  const [camera, setCamera] = useState(true);
  const [newResult, setNewResult] = useState(null);
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
          console.log('data hit');
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
    <p>{newResult ? newResult : "Scanning..."}</p>
    <button onClick={startCameraHandler}>
      {!camera ? 'start' : 'stop'}
    </button>
    <div className="container">
      {camera && <Scanner onDetected={onDetected} />}
    </div>
  </div>)

  if (loading) {
    renderHTML = <div><p>Loading...</p></div>
  }

  return renderHTML;
}