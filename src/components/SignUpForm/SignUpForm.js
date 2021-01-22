import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import config from '../../config';

import './SignUpForm.css'

function SignUpForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState({})

  const postUserHandler = (e) => {
    e.preventDefault();
    let payload = {
      username,
      name,
      password
    }
    fetch(`${config.API_ENDPOINT}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => {
            return Promise.reject(e);
          })
        }
        props.history.replace('/')
        return res.json();
      })
      .catch(err => {
        setError(err.error);
      })
  }

  return (
    <div>
      <nav>
        <Link className='login-nav' to="/">Login</Link>
      </nav>
      <h1 className='title'>InstantPantry</h1>
      <div className='signup'>
        <form onSubmit={postUserHandler} className='signup-form'>
          <h2 className='signup-title'>Sign Up</h2>
          {error.message ? <p className='error'>{error}</p> : null}
          <label>Username:</label>
          <input required={true} onChange={(e) => { setUsername(e.target.value) }} type='text' />
          <label>Name:</label>
          <input required={true} onChange={(e) => { setName(e.target.value) }} type='text' />
          <label>Password:</label>
          <input required={true} onChange={(e) => { setPassword(e.target.value) }} type='password' />
          <input type='submit' />
        </form>
      </div>
    </div>
  )
}
export default withRouter(SignUpForm)