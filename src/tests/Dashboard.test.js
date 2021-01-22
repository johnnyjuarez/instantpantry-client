import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Dashboard from '../routes/Dashboard/Dashboard';

describe('landing modal test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Dashboard /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})