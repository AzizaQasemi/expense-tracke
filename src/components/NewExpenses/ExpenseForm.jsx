import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const inputChangeHandler = (event) => {
		const currentInput = event.target.name
		if (currentInput === 'title') {
			setTitle(event.target.value)
		}else if (currentInput === 'amount') {
			setAmount(event.target.value)
		}else if (currentInput === 'date') {
			setDate(event.target.value)
		}
	}



	const submitHandler = (event) => {
		event.preventDefault()
		const currentData = {
			title, 
			amount,
			date: new Date(date)
		}
		props.onSaveExpenseData(currentData)
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						onChange={inputChangeHandler}
						type='text'
						name='title'
						value={title}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						onChange={inputChangeHandler}
						type='number'
						name='amount'
						min='0.1'
						step='1'
						value={amount}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						onChange={inputChangeHandler}
						type='date'
						name='date'
						min='2023-01-01'
						value={date}
					/>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	)
}

export default ExpenseForm
