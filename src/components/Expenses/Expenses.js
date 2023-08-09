import {React, useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";
import ExpensesFilter from "../Filter/ExpensesFilter";

function Expenses(props) {
    const expenses = props.expense

    const [selectedYear, setSelectedYear] = useState('2023')

    const getSelectedYear = (year) => {
        setSelectedYear(year);
    }

    const toRender = expenses.filter(condition)

    function condition(theYear) {
        const filteredYear = theYear.date.getFullYear()
        return filteredYear == selectedYear
    }

    return (
        <Card className="expenses">

            <ExpensesFilter 
                onGetSelectedYear = {getSelectedYear}
                default = {selectedYear}
            />
            {toRender.map( (expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount = {expense.amount}
                    date = {expense.date}
                />
            ))}
        </Card>
    )
}

export default Expenses;