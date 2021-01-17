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
  const [resultData, setResultData] = useState({})

  let onDetected = debounce(1000, (result) => {

    if (result) {
      setCamera(false);
      setNewResult(result);
      context.passData(result);
      console.log('onDetected')
      return;
    }

  });

  return (
    <div className="App">
      <p>{newResult ? newResult : "Scanning..."}</p>
      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}