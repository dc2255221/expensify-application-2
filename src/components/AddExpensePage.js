// The AddExpensePage will dispatch the given action to the redux store
// We need to connect component to store so it can dispatch
// Don't need anything from state so leave first parentheses empty but pass component to second one
// Now, we have access to props.dispatch
// We can call it within our onSubmit eventlistener
// We need addExpense action generator to create the action that we are going to dispatch
// When we did dispatch, we added the data to the redux store
// Now, we need to automatically redirect to Dashboard page onSubmit of form
// Components that we render inside of React.router gets access to many special props
// On history prop, we have a push method which is how we can programatically change pages. The method takes in the string path to Dashboard
// Using it will switch you over as if you clicked Dashboard link through Browser Routing. Hence, no full page refresh

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  };
};

// way to return dispatcher function, allowing you to abstract them from the components themselves
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);


