import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [enteredTitle, setenteredTitle] = useState('')
    const [enteredAmount, setenteredAmount] = useState('')
    const [enteredDate, setenteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value)
        // setTimeout(console.log(enteredTitle), 5000)

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value // over writing enteredTitle with userInput Value
        // })
        
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // });
    }

    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value)
        // setTimeout(console.log(enteredAmount), 5000)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     };
        // });        
    }

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value)
        // setTimeout(console.log(enteredDate), 5000)

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     };
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(expenseData)
        props.onSaveExpenseData(expenseData);

        //just a neat practice to keep input boxes clear
        setenteredAmount('') 
        setenteredDate('')
        setenteredTitle('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text'
                        value={enteredTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        value={enteredAmount} 
                        min='0.01' 
                        step='0.01' 
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date'
                        value={enteredDate} 
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.cancel}>Cancel</button>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm;