import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    expect(selectExpensesTotal([])).toBe(0);
})

test('should correctly add up a single expense', () => {
    expect(selectExpensesTotal([expenses[1]])).toBe(109500)
});

test('should correctly add up multiple expense', () => {
    expect(selectExpensesTotal(expenses)).toBe(114195);
});

