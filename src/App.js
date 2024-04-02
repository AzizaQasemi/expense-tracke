import { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'

const initState = [
	{
		id: 'e1',
		title: 'Car tools',
		amount: 200,
		date: new Date(2023, 5, 14),
	},
	{
		id: 'e2',
		title: 'Toys',
		amount: 40,
		date: new Date(2022, 3, 7),
	},
	{
		id: 'e3',
		title: 'Papers',
		amount: 100,
		date: new Date(2024, 1, 23),
	},
]

function App() {
	const [expensesData, setExpensesData] = useState(initState)

	const addExpenseDataHandler = (expenses) => {
		setExpensesData((prevState) => {
			return[expenses, ...prevState]
		})
	}
	return (
		<div className='App'>
			<NewExpenses onAddExpense={addExpenseDataHandler} />
			<Expenses items={expensesData} />
		</div>
	)
}

export default App
