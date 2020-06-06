import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import getVisibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
import {altFilters2} from '../fixtures/filters';

test('should correctly show total for one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should correctly show total for multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should correctly show total for filtered expenses', () => {
    const filteredExpenses = getVisibleExpenses(expenses, altFilters2);
    const wrapper = shallow(<ExpenseSummary expenses={filteredExpenses}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
