
import React, { useState } from 'react';
import RenderExpense from './components/Expences/RenderExpense/RenderExpense';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENCES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
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

  const [expenses, setExpences] = useState(DUMMY_EXPENCES);

  const addExpenseHandler = (expense) => {
    // You shouldn't update state 
    // that relate onprevious state like this
    // setExpences([expense, ...expenses]);

    // You should pass a function as an argument
    // to this state updating function
    // It's not clear for me though
    // Why don't we mention "expenses" variable
    // And it is automaticaly stores in prevExpenses
    setExpences(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <RenderExpense data={expenses} />
    </div>
  );
}

export default App;
