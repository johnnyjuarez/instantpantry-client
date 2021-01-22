import React from 'react';
import ReactDOM from 'react-dom';

import AddCategoryForm from '../components/AddCategoryForm/AddCategoryForm';

describe('landing modal test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddCategoryForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})