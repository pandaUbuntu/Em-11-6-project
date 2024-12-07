import './style.css'
import { Category } from '../../../../types/category'
import DeleteButton from '../../../utils/deleteButton'

type RowCatagoryType = {
  category: Category,
  deleteCategory: (id: string) => void,
}

function Row(props: RowCatagoryType) {

    return (
      <li key={props.category.id}>{props.category.name}<DeleteButton id={props.category.id} handle={props.deleteCategory}/></li>
    )
  }
  
  export default Row
  