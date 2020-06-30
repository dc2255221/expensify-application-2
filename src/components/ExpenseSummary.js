import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';
import { StyledLink, StyledH1, StyledSpan, StyledDiv, ContentContainer, PageHeader } from '../styles/ExpenseSummary';

export const ExpenseSummary = (props) => {
    const expensesTotal = numeral(selectTotalExpenses(props.expenses) / 100).format('$0,0.00');
    const expensesCount = props.expenses.length;
    return (
        <PageHeader>
            <ContentContainer>
                <StyledH1> Viewing 
                    <StyledSpan> {expensesCount} </StyledSpan>
                    {expensesCount === 1 ? 'expense' : 'expenses'} totalling 
                    <StyledSpan> {expensesTotal} </StyledSpan>
                </StyledH1>
                <StyledDiv>
                    <StyledLink to="/create"> Add Expense </StyledLink>
                </StyledDiv>
            </ContentContainer>
        </PageHeader>
    );
};

const mapToStateToProps = (state) => (
    {
        expenses: selectExpenses(state.expenses, state.filters)
    }
);

export default connect(mapToStateToProps)(ExpenseSummary);
