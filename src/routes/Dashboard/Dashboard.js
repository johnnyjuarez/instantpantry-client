import React, {useState, useEffect} from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

import TokenService from '../../services/token-service'

import config from '../../config';

export default function Dashboard() {
  // state for holding category data
  const [categories, setCategories] = useState([])

  const user_id = localStorage.getItem('userId')

  useEffect(() => {
    console.log('user id', user_id);
    fetch(`${config.API_ENDPOINT}/category/${user_id}`, {
      headers: {
        'content-Type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      setCategories(data);
    })
  }, [])

  const categoryCards = categories.map((category) => {
    return <CategoryCard key={category.id} id={category.id} title={category.category_title} />
  })

  return (
    <div>
      <h1 className='title'>InstantPantry</h1>
      {categoryCards}
    </div>
  )
}
