import {React, useState} from 'react';
import ExpensesList from "./ExpensesList";
import './Expenses.css'
import Card from "./Card";
import ExpensesFilter from "../Filter/ExpensesFilter";

function Expenses(props) {
    const expenses = props.expense

    const [selectedYear, setSelectedYear] = useState('2023')

    const getSelectedYear = (year) => {
        setSelectedYear(year);
    }

    const filteredExpenses = expenses.filter(condition)

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
            <ExpensesList 
                items = {filteredExpenses}
            />  
        </Card>
    )
}

export default Expenses;