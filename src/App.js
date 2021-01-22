import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage'
import Dashboard from './routes/Dashboard/Dashboard'
import SignUpForm from './components/SignUpForm/SignUpForm'
import List from './routes/List/List'
import AddItem from './components/AddItem/AddItem'
import ItemContext from './itemContext';
import './App.css';


function App() {


  const [data, setData] = useState({})

  let passData = (newData) => {
    if (!data) {
      setData(newData);
    }
    return;
  }

  let resetData = (e) => {
    if (data) {
      setData('');
    }
  }

  const value = {
    passData,
    resetData
  }
  return (
    <ItemContext.Provider value={value}>
      <Router>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signup' component={SignUpForm} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/category/:id' component={List} />
        <Route exact path='/category/:id/addItem' component={AddItem} >
          <AddItem barcodeData={data} />
        </Route>
      </Router>
    </ItemContext.Provider>
  );
}

export default App;
