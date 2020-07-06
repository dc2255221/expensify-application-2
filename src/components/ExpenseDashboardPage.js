import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = () => (
    <div> 
      <ExpenseSummary/>
      <ExpenseChart/>
      <ExpenseListFilters/>
      <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;