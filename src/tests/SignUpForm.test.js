import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import SignUpForm from '../components/SignUpForm/SignUpForm';

describe('landing modal test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><SignUpForm /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})