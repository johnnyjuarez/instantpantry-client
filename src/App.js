import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage'
import Dashboard from './routes/Dashboard/Dashboard'
import SignUpForm from './components/SignUpForm/SignUpForm'
import List from './routes/List/List'
import AddItem from './components/AddItem/AddItem'
import ItemContext from './itemContext';
import './App.css';

// import useDebounce from './services/useDebounce';
import { debounce } from 'lodash';

function App() {


  const [data, setData] = useState({})

  const debounceData = useCallback(debounce((newData) => setData(newData), 1000), [])////setData(newData);

  const passData = (newData) => {
    console.log('passData hit')
    debounceData(newData);
    return;
  }

  const value = {
    passData
  }
  return (
    <ItemContext.Provider value={value}>
      <Router>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signup' component={SignUpForm} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/category/:id' component={List} />
        <Route exact path='/category/:id/addItem' component={AddItem} >
          <AddItem barcode={data} />
        </Route>
      </Router>
    </ItemContext.Provider>
  );
}

export default App;
