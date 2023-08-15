import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const cancelDataHandler = () =>{
    setShowForm(false)
  }

  const [showForm, setShowForm] = useState(false);

  const expenseHandler = () =>{
    setShowForm(true)
  };


  return (
    <div className='new-expense'>
      {!showForm && <button onClick={expenseHandler}>Add Expense</button>}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={cancelDataHandler}/>}
    </div>
  );
};

export default NewExpense;