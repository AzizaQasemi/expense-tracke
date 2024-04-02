import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
	let [title, setTitle] = useState(props.title)
	const expenseAmount = props.amount

	return (
		<div className='expense-item'>
			<ExpenseDate date={props.date} />
			<h2 className='expense-item__description'>{title}</h2>
			<p className='expense-item__price'>${expenseAmount}</p>
		</div>
	)
}
export default ExpenseItem
