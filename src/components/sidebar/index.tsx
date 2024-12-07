import { useState } from 'react'
import CategoryList from './categoryList'
import CreateCategory from './createCategory'
import { createCategory, deleteCategory, getCategories } from '../../services/CategoryService'
import './style.css'

function Sidebar() {
  const [categories, setCategories] = useState(getCategories());

  const create = (name:string):void => {
    createCategory(name);
    setCategories(getCategories());
  }

  const deleteC = (id: string):void => {
    deleteCategory(id);
    setCategories(getCategories());
  }

  return (
    <div className='sidebar-wrapper'>
      <h2>Category</h2>
      <CreateCategory create={create}/>
      <CategoryList categories={categories} deleteCatergory={deleteC} />
    </div>
  )
}

export default Sidebar
