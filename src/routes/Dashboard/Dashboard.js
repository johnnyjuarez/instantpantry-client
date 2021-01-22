import React, { useState, useEffect } from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import Modal from '../../components/Modal/Modal'
import TokenService from '../../services/token-service'

import config from '../../config';
import AddCategoryForm from '../../components/AddCategoryForm/AddCategoryForm';
import Nav from '../../components/Nav/Nav';

import './Dashboard.css';

export default function Dashboard() {
  // state for holding category data
  const [categories, setCategories] = useState([])
  const [addCategory, setAddCategory] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const user_id = localStorage.getItem('userId');

  useEffect(() => {
    setIsDelete(false);

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
        setCategories(data);
      })
  }, [addCategory, isDelete, user_id])


  const addCategoryHandler = () => {
    setAddCategory(!addCategory);
  }

  let addCategoryHTML = (
    <Modal open={addCategory} onClose={addCategoryHandler}>
      <AddCategoryForm closeOnSubmit={addCategoryHandler} />
    </Modal>
  )

  const categoryCards = categories.map((category) => {
    return <CategoryCard
      key={category.id}
      id={category.id}
      title={category.category_title}
      onDelete={() => { setIsDelete(true) }}
    />
  })

  return (
    <div>
      <Nav />
      <h1 className='title'>InstantPantry</h1>
      {categories.length === 0 ? <p style={{ textAlign: 'center' }} className='error'>Add a category to begin</p> : null}
      {categoryCards}
      <button className='addCat-btn' onClick={addCategoryHandler}>Add Category</button>
      {addCategoryHTML}
    </div>
  )
}
