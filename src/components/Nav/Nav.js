import React from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom';

import './Nav.css';

function Nav() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('userId');
    history.push('/');
  }
  return (
    <div className='navbar'>
      <Link className='navbar-item' to="/dashboard">Home</Link>
      <button className='navbar-item' onClick={logout}>Logout</button>
    </div>
  )
}
export default withRouter(Nav);