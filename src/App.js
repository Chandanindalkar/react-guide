import React, { useState }from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const Initial_Expenses = [{
  id: 'e1',
  title: 'Tissues',
  amount: 94.12,
  date: new Date(2020, 7, 14),
},
{
  id: 'e2',
  title: 'New TV',
  amount: 799.49,
  date: new Date(2021, 2, 12)
},
{
  id: 'e3',
  title: 'Bike Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28),
},
{
  id: 'e4',
  title: 'New Desk (Wooden)',
  amount: 450,
  date: new Date(2021, 5, 12),
},
];

function App() {

  const [expenses, setExpenses] = useState(Initial_Expenses)
  
  const getExpenseData = data => {
    setExpenses((prevState) => {
      return [...prevState, data];
    })
  }

  return (
    <div className="App">
      <NewExpense
        onGetExpenseData = {getExpenseData}
      />
      <Expenses 
        expense = {expenses}>
      </Expenses>
    </div>
  );
}

export default App;