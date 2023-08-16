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
  date: new Date(2022, 2, 28),
},
{
  id: 'e4',
  title: 'New Desk (Wooden)',
  amount: 450,
  date: new Date(2019, 5, 12),
},
{
  id: 'e5',
  title: 'Riding Gloves',
  amount: 1094.12,
  date: new Date(2023, 8, 12),
},
{
  id: 'e6',
  title: 'New Phone',
  amount: 39994.00,
  date: new Date(2022, 8, 11),
},
{
  id: 'e7',
  title: 'GoPro',
  amount: 32000.00,
  date: new Date(2023, 6, 12),
},
{
  id: 'e8',
  title: 'Helmet',
  amount: 3700.00,
  date: new Date(2023, 5, 12),
},
];

function App() {

  const [expenses, setExpenses] = useState(Initial_Expenses)
  
  const getExpenseData = data => {
    setExpenses((prevState) => {
      return [data, ...prevState];
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