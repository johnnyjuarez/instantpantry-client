import React from 'react';
import ReactDOM from 'react-dom';

import CategoryCard from '../components/CategoryCard/CategoryCard';

describe('landing modal test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CategoryCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})