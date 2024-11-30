import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'

function App() {
  if(localStorage.getItem('categories') == null )
  {  
    localStorage.setItem('categories', JSON.stringify([]))
  }

  const [budgetValue, setBudgetValue] = useState(0)

  return (
    <div className="main-container">
      <Header username='Jonh Doe' budget={budgetValue}/>
      <div className="content">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
