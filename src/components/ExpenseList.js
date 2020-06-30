import React from 'react';
import { connect } from 'react-redux'; // used to create a new HOC that connects component to Redux store
// When you connect component to redux store, its reactive, which means as store changes, your component will be rerendered with new values 
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { ContentContainer, ListHeader, ListBody, ShowForMobile, ShowForDesktop, NoExpenseMessage } from '../styles/ExpenseList';

export const ExpenseList = (props) => (
    <ContentContainer>
        <ListHeader>
            <ShowForMobile> Expenses </ShowForMobile>
            <ShowForDesktop> Expense </ShowForDesktop>
            <ShowForDesktop> Amount </ShowForDesktop>
        </ListHeader>
        <ListBody>
            {
                props.expenses.length === 0 ? (
                <NoExpenseMessage>
                    <span>No expenses</span>
                </NoExpenseMessage>
                ) : ( 
                    props.expenses.map((expense) => 
                    <ExpenseListItem {...expense} key={expense.id}/>
                    )
                )
            }
        </ListBody>
    </ContentContainer>
);

// define things we want off of store...
// we will also have access to dispatch as a prop in our connected components 
const mapStateToProps = (state) => { 
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};
 
export default connect(mapStateToProps)(ExpenseList);
