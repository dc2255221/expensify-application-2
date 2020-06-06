import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import getVisibleExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
import {filters, altFilters} from '../fixtures/filters';

test('should correctly show total for one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should correctly show total for multiple expenses', () => {
    const defaultFilteredExpenses = getVisibleExpenses(expenses, filters);
    const wrapper = shallow(<ExpenseSummary expenses={defaultFilteredExpenses}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should correctly show total for expenses based on filters', () => {
    const filteredExpenses = getVisibleExpenses(expenses, altFilters);
    const wrapper = shallow(<ExpenseSummary expenses={filteredExpenses}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
