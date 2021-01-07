import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage'
import Dashboard from './routes/Dashboard/Dashboard'
import SignUpForm from './components/SignUpForm/SignUpForm'
import ItemList from './components/ItemList/ItemList'
import AddItem from './components/AddItem/AddItem'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/signup' component={SignUpForm}/>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route exact path='/category/:id' component={ItemList} />
      <Route exact path='/category/:id/addItem' component={AddItem} />
    </Router>
  );
}

export default App;
