import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TokenService from '../../services/token-service';

import config from '../../config';

import './LoginForm.css';

export default function LoginForm(props) {
  let history = useHistory();


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const loginHandler = (e) => {
    const credentials = {
      username,
      password
    }
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => {
            return Promise.reject(e);
          })
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem('userId', data.id);
        TokenService.saveAuthToken(data.authToken);
        history.push('/dashboard');
      })
      .catch(err => {
        setError(err.error);
        console.log(err);
      })
  }

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className='loginForm'>
      <form onSubmit={loginHandler} className='login-form'>
        <h2 className='loginForm-title'>Login</h2>
        {error ? <p className='error'>{error}</p> : null}
        <label>Username:</label>
        <input onChange={onChangeUsername} type='text' />
        <label>Password:</label>
        <input onChange={onChangePassword} type='password' />
        <input type='submit' />
      </form>
    </div>
  )
}
