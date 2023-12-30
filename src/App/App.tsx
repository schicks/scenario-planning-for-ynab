import { useEffect, useState } from 'react'
import { useYNAB } from '../YNAB'
import './App.css'
import { BudgetSummary } from 'ynab'

function App() {
  const [budgets, setBudgets] = useState<BudgetSummary[] | null>(null)
  const api = useYNAB()
  useEffect(() => {
    if (!budgets) api.budgets.getBudgets().then(({ data: {budgets} }) => {
      setBudgets(budgets)
    })
  })

  if (!budgets) {
    return (
      <>
        loading...
      </>
    )
  }

  return (
    <ul>
      {budgets.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )
}

export default App
