import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {
    const expensesTotal = numeral(selectTotalExpenses(props.expenses) / 100).format('$0,0.00');
    const expensesCount = props.expenses.length;
    return (
        <div>
            <h1> Viewing {expensesCount} {expensesCount === 1 ? 'expense' : 'expenses'} totalling {expensesTotal} </h1>
        </div>
    );
};

const mapToStateToProps = (state) => (
    {
        expenses: selectExpenses(state.expenses, state.filters)
    }
);

export default connect(mapToStateToProps)(ExpenseSummary);
