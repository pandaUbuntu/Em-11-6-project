import './style.css'
import DeleteButton from '../../../utils/deleteButton'
import { Transaction } from '../../../../services/TransactionService'

type RowTransactionType = {
  transaction: Transaction,
  delete: (id: string) => void,
}

function Row(props: RowTransactionType) {

    return (
      <li className={props.transaction.type?.id == 1 ? "income" : "expense"}  key={props.transaction.id}><span>{props.transaction.category.name}</span><span>{props.transaction.type?.name}</span><span>{props.transaction.value}</span><DeleteButton id={props.transaction.id} handle={props.delete}/></li>
    )
  }
  
  export default Row
  