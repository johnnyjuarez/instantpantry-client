import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage'
import SignUpForm from './components/SignUpForm/SignUpForm'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/signup' component={SignUpForm}/>
    </Router>
  );
}

export default App;
