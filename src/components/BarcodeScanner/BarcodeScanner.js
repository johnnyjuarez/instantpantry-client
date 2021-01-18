import React, { useState, useContext } from "react";
import Scanner from '../Scanner/Scanner'
import ReactDOM from "react-dom";
import config from '../../config';
import ItemContext from '../../itemContext';
import { debounce } from 'throttle-debounce';

// import "./styles.css";

export default function BarcodeScanner() {
  const context = useContext(ItemContext);
  const [camera, setCamera] = useState(false);
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
          setLoading(false);
          context.passData(data);
        });
      return;
    }
  });

  let startCameraHandler = () => {
    setCamera(!camera);
    context.resetData();
  }


  let renderHTML = (<div className="App">
    <p>{newResult ? newResult : "Scanning..."}</p>
    <button onClick={startCameraHandler}>
      {camera ? "Stop" : "Start"}
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