import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import config from '../../config';

import './SignUpForm.css'

function SignUpForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const postUserHandler = (e) => {
    let payload = {
      username,
      name,
      password
    }
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(() => {
        props.history.replace('/')
      })
  }

  return (
    <div>
      <nav>
        <Link to="/">Login</Link>
      </nav>
      <h1 className='title'>InstantPantry</h1>

      <form onSubmit={postUserHandler} className='signup-form'>
        <h2>Sign Up</h2>
        <label>Username:</label>
        <input onChange={(e) => { setUsername(e.target.value) }} type='text' />
        <label>Name:</label>
        <input onChange={(e) => { setName(e.target.value) }} type='text' />
        <label>Password:</label>
        <input onChange={(e) => { setPassword(e.target.value) }} type='password' />
        <input type='submit' />
      </form>
    </div>
  )
}
export default withRouter(SignUpForm)