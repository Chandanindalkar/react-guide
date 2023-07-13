import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense() {

    const getExpenseData = (data) => {
        const expenseData = {
            ...data
        }
        console.log(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm
                onExpenseDataHandler = {getExpenseData}
            />
        </div>
    )
}

export default NewExpense;