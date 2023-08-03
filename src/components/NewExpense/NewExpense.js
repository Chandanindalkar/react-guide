import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {

    const saveExpenseData = (data) => {
        const expenseData = {
            ...data
        }
        // console.log(expenseData);
        props.onGetExpenseData(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm
                onSaveExpenseData = {saveExpenseData}
            />
        </div>
    )
}

export default NewExpense;