import React from 'react'
import {Link} from 'react-router-dom'

import './SignUpForm.css'

export default function SignUpForm() {
  return (
    <div>
      <nav>
        <Link to="/">Login</Link>
      </nav>
      <h1 className='title'>InstantPantry</h1>
      
      <form className='signup-form'>
        <h2>Sign Up</h2>
        <label>Username:</label>
        <input type='text' />
        <label>Password:</label>
        <input type='password'/>
        <input type='submit' />
      </form>
    </div>
  )
}
