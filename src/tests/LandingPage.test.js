import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from '../routes/LandingPage/LandingPage';

describe('landing modal test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><LandingPage /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})