// The dispatching of action onSubmit of form will not happen in this component
// This is because this component needs to be reused in AddExpensePage and EditExpensePage
// Whether we are adding or editing, we will be dispatching different actions
// Hence, we need to pass the data from the submitted form up 
// We do this by calling a prop onSubmit that gets passed in from the parent

import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { StyledForm, Error, StyledInput, StyledDiv, StyledSelect, StyledTextarea, StyledButton } from '../styles/ExpenseForm';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            category: props.expense ? props.expense.category : '',
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({ note });
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { // must be empty or a number with max two decimal spaces
            this.setState({ amount });
        }
    }
    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState({ category });
    }
    onDateChange = (createdAt) => {
        if (createdAt) { // this will prevent user from being able to clear date value
            this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({calendarFocused: focused}));
    }
    onSubmit = (e) => {
        e.preventDefault(); // prevent full page refresh
        if (!this.state.description || !this.state.amount || !this.state.category) { // validation for description and amount, format check not needed bc we already added regex checking for amount
            this.setState(() => ({ error: 'Please provide description, amount, and category!'}));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                category: this.state.category,
                note: this.state.note   
            });
        }
    }
    render(){
        return (
            <StyledForm onSubmit={this.onSubmit}>
                {this.state.error && <Error>{this.state.error}</Error>}
                <StyledInput
                    type="text"
                    placeholder=" Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <StyledInput
                    type="number"
                    placeholder=" Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <StyledDiv>
                    <SingleDatePicker
                        id={"date-input"}
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </StyledDiv>
                <StyledSelect
                    value={this.state.category} 
                    onChange={this.onCategoryChange}
                >
                    <option value="category"> Category </option>
                    <option value="home-and-utilities"> Home and Utilities </option>
                    <option value="personal-and-family-care"> Personal and Family Care </option>
                    <option value="groceries"> Groceries </option>
                    <option value="restaurants-and-dining"> Restaurants and Dining </option>
                    <option value="health"> Health </option>
                    <option value="insurance"> Insurance </option>
                    <option value="transportation"> Transportation </option>
                    <option value="shopping-and-entertainment"> Shopping and Entertainment </option>
                    <option value="travel"> Travel </option>
                    <option value="education"> Education </option>
                    <option value="giving"> Giving </option>
                    <option value="business-expenses"> Business Expenses </option>
                    <option value="finance"> Finance </option>
                    <option value="cash-checks-and-misc"> Cash, Checks, and Misc </option>
                </StyledSelect>
                <StyledTextarea 
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </StyledTextarea>
                <div>
                    <StyledButton> Save Expense </StyledButton>
                </div>
            </StyledForm>
        )
    }
}
