// We need to connect this component to redux store so we can dispatch action 
// Search the array of expenses for the expense with given id 
// We do need to set up a mapToStateToProps function bc we need to give component access to the expense object
// We will be able to access the state which is great bc that is where expenses array lives
// But, we also need to pass in props as second argument bc we are searching for props.match.params.id
// We will add one new prop expense and will use current props to search expenses array
// Find allows us to search through an array looking for a single item. We determine whether item is found by returning true from the callback
// Now, we will render an instance of ExpenseForm which takes in an onSubmit prop
// We need to make sure data for the given expense is populated within the form
// We do this by passing down the expense as props to ExpenseForm and having it set the values to state 
// If no expense is passed down (i.e. the case of AddExpenseForm), set default values to state 
// Dispatch the action to edit the expense onSubmit of form
// Redirect to the dashboard using history's push method
// Move the removeExpense button from dashboard to EditExpensePage

// React router will render our connected higher order component 
// The higher order component passes the props through and also allows us to add some new ones within the returned object of mapToStateToProps function 

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/'); 
  }
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  render() {
    return (
        <div>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove}> Remove </button> 
        </div>
    );
  };
};

const mapToStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense( id, expense )),
  removeExpense: (expenseData) => dispatch(removeExpense( expenseData ))
});

export default connect(mapToStateToProps, mapDispatchToProps)(EditExpensePage);