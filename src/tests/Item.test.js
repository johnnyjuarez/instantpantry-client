import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Item from '../components/Item/Item';

describe('landing modal test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Item itemData={{ item_name: 'test name', amount: '123' }} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})