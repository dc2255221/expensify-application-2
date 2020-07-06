import React from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import selectExpenses from '../selectors/expenses';
import selectTotalByCategory from '../selectors/expenses-category';
import { ChartContainer } from '../styles/ExpenseChart';
import { CatColors } from '../constants';

export const ExpenseChart = ({ expenses }) => {
    const data = {
        datasets: [
            {
                data: [
                    selectTotalByCategory(expenses, 'home-utilities'),
                    selectTotalByCategory(expenses, 'transportation'),
                    selectTotalByCategory(expenses, 'groceries'),
                    selectTotalByCategory(expenses, 'personal-family-care'),
                    selectTotalByCategory(expenses, 'health'),
                    selectTotalByCategory(expenses, 'insurance'),
                    selectTotalByCategory(expenses, 'restaurants-dining'),
                    selectTotalByCategory(expenses, 'shopping-entertainment'),
                    selectTotalByCategory(expenses, 'travel'),
                    selectTotalByCategory(expenses, 'cash-checks-misc'),
                    selectTotalByCategory(expenses, 'giving'),
                    selectTotalByCategory(expenses, 'business-expenses'),
                    selectTotalByCategory(expenses, 'education'),
                    selectTotalByCategory(expenses, 'finance'),
                    selectTotalByCategory(expenses, 'uncategorized')
                ],
                backgroundColor: [
                    CatColors.light_green,
                    CatColors.med_light_green,
                    CatColors.green,
                    CatColors.med_light_green,
                    CatColors.dark_green,
                    CatColors.blue,
                    CatColors.yellow,
                    CatColors.light_orange,
                    CatColors.orange,
                    CatColors.dark_orange,
                    CatColors.pink,
                    CatColors.dark_pink,
                    CatColors.purple,
                    CatColors.dark_purple,
                    CatColors.grey
                ],
                legend: false
            }
        ],
        labels: [
            'Home and Utilities',
            'Transportation',
            'Groceries',
            'Personal and Family Care',
            'Health',
            'Insurance',
            'Restaurants and Dining',
            'Shopping and Entertainment',
            'Travel',
            'Cash, Checks, and Misc',
            'Giving',
            'Business Expenses',
            'Education',
            'Finance',
            'uncategorized'
        ]
    }
    return (
            !!expenses.length &&
            <ChartContainer>
                <Doughnut data={data}/>
            </ChartContainer> 
    )
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseChart);