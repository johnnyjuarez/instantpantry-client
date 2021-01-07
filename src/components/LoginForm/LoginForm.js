import React from 'react'
import {useHistory} from 'react-router-dom'

export default function LoginForm(props) {
  let history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();
    history.push('/dashboard')
  }

  return (
    <div>
      <form onSubmit={loginHandler} className='login-form'>
        <h2>Login</h2>
        <label>Username:</label>
        <input type='text' />
        <label>Password:</label>
        <input type='password' />
        <input type='submit' />
      </form>
    </div>
  )
}
