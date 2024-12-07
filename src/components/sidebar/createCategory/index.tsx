import CreateButton from '../../utils/createButton'
import CustomInput from '../../utils/customInput'
import './style.css'

type CreateCategoryType ={
    create: (text: string) => void,
}

function CreateCategory(props:CreateCategoryType) {
    let categoryName = "";

    function onChange(text: string):void {
        categoryName = text;
    }

    function handleClick(event: React.MouseEvent):void {
        event.preventDefault()
        
        props.create(categoryName);
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