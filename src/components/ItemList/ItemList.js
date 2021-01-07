import React from 'react'
import {Link} from 'react-router-dom'

export default function ItemList(props) {
  console.log(props.history);
  // fetch data from props
  return (
    <div>
      <nav>
        <Link to='/dashboard'>Home</Link>
      </nav>
      <h1>List</h1>
    </div>
  )
}
