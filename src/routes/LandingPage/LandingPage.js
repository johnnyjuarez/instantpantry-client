import React from 'react'
import { Link } from 'react-router-dom'

// components
import LoginForm from '../../components/LoginForm/LoginForm'


import './LandingPage.css';

export default function LandingPage() {
  return (
    <div>
      <nav>
        <Link className='signup-nav' to='/signup'>Sign Up</Link>
      </nav>
      <h1 className='title'>InstantPantry</h1>
      <LoginForm />
    </div>
  )
}
