import React, {useState, useEffect} from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

export default function Dashboard() {
  // state for holding category data
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // fetch request to setCategories
    setCategories([
      {
        id: 1,
        title: 'Sample Title',
        items: [1, 2, 3, 4, 5]
      },
      {
        id: 2,
        title: 'Sample Title Two',
        items: [1, 2, 3, 4, 5]
      },
    ])
  }, [])

  const categoryCards = categories.map((category) => {
    return <CategoryCard key={category.id} id={category.id} title={category.title} />
  })

  return (
    <div>
      <h1 className='title'>InstantPantry</h1>
      {categoryCards}
    </div>
  )
}
