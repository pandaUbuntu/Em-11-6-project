//import './style.css'
import { Category } from "../../../types/category"
import Row from "./row"

type CategoriesType ={
    categories: Category[],
    deleteCatergory: (id:string) => void,
}

function CategoryList(props:CategoriesType) {

  return (
    <div className='list-wrapper'>
        <ul>
            {
                props.categories.map((category) => (
                    <Row key={category.id} category={category} deleteCategory={props.deleteCatergory}/>
                ))
            }
        </ul>
    </div>
  )
}

export default CategoryList
