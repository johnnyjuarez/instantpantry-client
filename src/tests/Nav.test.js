import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from '../components/Nav/Nav';

describe('landing modal test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Nav /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})