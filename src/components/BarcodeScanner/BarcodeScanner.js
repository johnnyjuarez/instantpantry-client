import React, { useState } from "react";
import Scanner from '../Scanner/Scanner'
import ReactDOM from "react-dom";
import config from '../../config';

// import "./styles.css";

export default function BarcodeScanner() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    setResult(result);
    const proxyurl = 'cors-anywhere.herokuapp.com'; // Use a proxy to avoid CORS error
    const api_key = "382nmem2dqelxtpn8h1kr0osbslw31";
    const url = 'https://' + proxyurl + `/https://api.barcodelookup.com/v2/products?barcode=${result}&key=382nmem2dqelxtpn8h1kr0osbslw31`;
    fetch(url, {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => {
        // console.log(response.text());
        return response.json();
      })
      .then(data => console.log(data));
  };

  return (
    <div className="App">
      <p>{result ? result : "Scanning..."}</p>
      <button onClick={() => setCamera(!camera)}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}