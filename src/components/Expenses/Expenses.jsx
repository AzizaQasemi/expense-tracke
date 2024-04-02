import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024')

	const filteredChangeHandler = (selectYear) => {
		setFilteredYear(selectYear) 
	}

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<div className='expenses'>
			<ExpensesFilter
			  selected={filteredYear}
			  onChangeFilter={filteredChangeHandler}
			/>
			{console.log(filteredYear)}
			<ExpensesChart expenses={filteredExpenses}/>
			<ExpensesList item={props.items} expenses={filteredExpenses}/>
		</div>
	)
}

export default Expenses