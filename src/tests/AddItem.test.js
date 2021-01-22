import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AddItem from '../components/AddItem/AddItem';

describe('landing modal test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><AddItem barcodeData={{ class: "EAN13", code: "0027000372418", company: "", description: "Orville Redenbacher's Butter Popcorn 3.29 Ounce Classic Bag </span> (from barcode.monster)", image_url: "https://m.media-amazon.com/images/I/51UQGg+i5fL._SL150_.jpg" }} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})