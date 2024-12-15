import { Transaction } from '../../../services/TransactionService'
import Row from './row'
import './style.css'

type TransactionProps ={
    transactions: Transaction[],
    delete: (id:string) => void,
}

function TransactionList(props:TransactionProps) {

  return (
    <>
         <div className='list-wrapper'>
          <ul>
              {
                  props.transactions.map((transaction) => (
                      <Row key={transaction.id} transaction={transaction} delete={props.delete}/>
                  ))
              }
          </ul>
        </div>
    </>
  )
}

export default TransactionList
