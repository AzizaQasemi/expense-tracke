import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'


const ExpensesList = (props) => {

	let expenseContent = <p className='expenses-list_fallback'>No Expense Found</p>
   if (props.expenses.length > 0) {
	 expenseContent = <ul className='expenses_list'>
        {props.expenses.map((el) => {
			return (
				<ExpenseItem
				   key={el.id}
				   title={el.title}
				   amount={el.amount}
				   date={el.date}
				/>
			)
		})}
    </ul>
   }
    if (props.expenses.length === 0) {
	 	 expenseContent = props.item.map((el) => {
	 		return (
	 			<ExpenseItem
	 			   key={el.id}
	 			   title={el.title}
	 			   amount={el.amount}
	 			   date={el.date}
	 			/>
	 		)
    	})
   }

   return(
	<div>
		{expenseContent}
		{console.log(props.expenses)}
	</div>
   )
};

export default ExpensesList;