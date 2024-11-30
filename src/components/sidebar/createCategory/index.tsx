import CreateButton from '../../utils/createButton'
import CustomInput from '../../utils/customInput'
import './style.css'
import { Category } from '../../../types/category';

function CreateCategory() {
    let categoryName = "";

    function onChange(text: string):void {
        categoryName = text;
    }

    function handleClick(event: React.MouseEvent):void {
        event.preventDefault()
        
        if(categoryName.trim().length !== 0){
            const newCategory:Category = {
                id: Math.random().toString(36).substr(2, 9),
                name: categoryName
            }

            let str:any = localStorage.getItem('categories')

            const catagoryList:Category[] = JSON.parse(str);

            catagoryList.push(newCategory);

            localStorage.setItem('categories', JSON.stringify(catagoryList));
        }

        console.log(localStorage.getItem('categories'))
    }

  return (
    <div className='create-catagory-wrapper'>
        <h4>Create Category</h4>
        <CustomInput placeholder='Write category name' change={onChange}/>
        <CreateButton handle={handleClick}/>
    </div>
  )
}

export default CreateCategory