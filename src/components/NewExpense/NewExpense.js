import {React, useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    const [ val, setVal ] = useState(true)

    const addExpenseHandler = () => {
        setVal(false)
    }

    const cancelHandler = () => {
        setVal(true)
    }

    const saveExpenseData = (data) => {
        const expenseData = {
            ...data
        }
        // console.log(expenseData);
        props.onGetExpenseData(expenseData)
    }

    return (
        <div className='new-expense'>
            {val && <button onClick={addExpenseHandler}>Add New Expense</button>}
            {!val && <ExpenseForm cancel={cancelHandler} onSaveExpenseData = {saveExpenseData}/>}
            
        </div>
    )
}

export default NewExpense;