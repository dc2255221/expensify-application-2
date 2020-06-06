import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectVisibleExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {
    const totalExpenses = numeral(selectTotalExpenses(props.expenses) / 100).format('$0,0.00');
    const numOfExpenses = props.expenses.length;
    return (
        <p> Viewing {numOfExpenses} {numOfExpenses === 1 ? 'expense' : 'expenses'} totalling {totalExpenses} </p>
    );
};

const mapToStateToProps = (state) => (
    {
        expenses: selectVisibleExpenses(state.expenses, state.filters)
    }
);

export default connect(mapToStateToProps)(ExpenseSummary);
