import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    const [enteredTitle, setenteredTitle] = useState('')
    const [enteredAmount, setenteredAmount] = useState('')
    const [enteredDate, setenteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setenteredTitle(event)
        setTimeout(console.log(enteredTitle), 5000)
    }

    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value)
        setTimeout(console.log(enteredAmount), 5000)
    }

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value)
        setTimeout(console.log(enteredDate), 5000)
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm;