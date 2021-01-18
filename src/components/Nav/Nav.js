import React from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom';

function Nav() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('userId');
    history.push('/');
  }
  return (
    <div>
      <Link to="/dashboard">Home</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
export default withRouter(Nav);