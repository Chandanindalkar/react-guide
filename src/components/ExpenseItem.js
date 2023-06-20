import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title); 
    // useState return two values in array, one is data and the other is a function call
    
    function clicked() {
        setTitle('updated!')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
                <button onClick={clicked}>change title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;