import CustomSelect from '../../utils/customSelect'
import './style.css'
import { getCategories } from '../../../services/CategoryService'
import { typeData } from '../../../services/TypeService'
import CustomInput from '../../utils/customInput'
import CreateButton from '../../utils/createButton'

type CreateTransactionProps ={
  create: (value:number, categoryId:string, typeId:number) => void,
}

function CreateTransaction(props: CreateTransactionProps) {
  const categoryList = getCategories()
  let valueTransaction:number = 0;
  let categoryId:string = categoryList.length > 0 ? categoryList[0].id : '';
  let typeId:number  = 1;

  const handle:React.MouseEventHandler = (event:React.MouseEvent) => {
    event.preventDefault()
    props.create(valueTransaction, categoryId, typeId);
  }

  return (
    <div>
      <h2>Create Transaction</h2>

      <CustomSelect
        options={categoryList}
        getOptionId={(category) => category.id.toString()}
        getOptionName={(category) => category.name}
        onChange={(value) => categoryId = value}
      />

      <CustomSelect
        options={typeData}
        getOptionId={(type) => type.id.toString()}
        getOptionName={(type) => type.name}
        onChange={(value) => typeId = Number(value)}
      />

      <CustomInput change={(value:string) => valueTransaction = Number(value)} placeholder='value' />

      <CreateButton handle={handle} />
    </div>
  )
}

export default CreateTransaction
