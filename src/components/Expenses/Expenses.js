import {React, useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";
import ExpensesFilter from "../Filter/ExpensesFilter";

function Expenses(props) {
    // const expenses = props.expense

    const [selectedYear, setSelectedYear] = useState('2023')

    const getSelectedYear = (year) => {
        setSelectedYear(year);
    }

    return (
        <Card className="expenses">

            <ExpensesFilter 
                onGetSelectedYear = {getSelectedYear}
                default = {selectedYear}
            />
            {props.items.map((expense) => (
                <ExpenseItem>
                    title={expense.title}
                    amount = {expense.amount}
                    date = {expense.date}
                </ExpenseItem>
            ))}
        </Card>
    )
}

export default Expenses;