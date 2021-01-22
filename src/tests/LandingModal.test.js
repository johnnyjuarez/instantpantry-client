import React from 'react';
import ReactDOM from 'react-dom';

import LandingModal from '../components/LandingModal/LandingModal';

describe('landing modal test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})