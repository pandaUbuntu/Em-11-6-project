import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Content from './components/content'
import { calculateTransactionValue } from './services/TransactionService'

function App() {
  const [budgetValue, setBudgetValue] = useState(calculateTransactionValue())

  function calculate(){
    setBudgetValue(calculateTransactionValue())
  }

  return (
    <div className="main-container">
      <Header username='Jonh Doe' budget={budgetValue}/>
      <div className="content">
        <Sidebar />
        <Content calculate={calculate} />
      </div>
    </div>
  )
}

export default App
