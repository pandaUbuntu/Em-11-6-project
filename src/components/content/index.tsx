import { useState } from 'react';
import { createTransaction, deleteTransaction, getTransactions } from '../../services/TransactionService';
import CreateTransaction from './createTransaction'
import './style.css'
import TransactionList from './transactionList';

type ContentProps = {
  calculate: () => void
}

function Content(props: ContentProps) {
    const [transactions, setTransactions] = useState(getTransactions());
  
    const createT = (value:number, categoryId:string, typeId:number):void => {
      createTransaction(value, categoryId, typeId);
      setTransactions(getTransactions());
      props.calculate();
    }
  
    const deleteT = (id: string):void => {
      deleteTransaction(id);
      setTransactions(getTransactions());
      props.calculate();
    }

  return (
    <div>
      <CreateTransaction create={createT}/>
      <TransactionList transactions={transactions} delete={deleteT} />
    </div>
  )
}

export default Content
