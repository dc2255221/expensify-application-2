import React from 'react';
import { connect } from 'react-redux';
// import { history } from '../routers/AppRouter';
import { Doughnut } from 'react-chartjs-2';
import selectExpenses from '../selectors/expenses';
import selectTotalByCategory from '../selectors/expenses-category';
import { setCategory } from '../actions/filters';
import { ChartContainer } from '../styles/ExpenseChart';
import { CatColors, CatValues, CatLabels } from '../constants';

export class ExpenseChart extends React.Component {
    onElementsClick = (elems) => {
        console.log(elems[0]._index);
        const index = elems[0]._index;
        this.props.setCategory(CatValues[index]);
    }
    render() {
        let data = {
            labels: CatLabels,
            datasets: [
                {
                    data: this.props.dataArray,
                    backgroundColor: this.props.colorsArray,
                    borderWidth: 5
                }
            ]
        }
        return (
            !!this.props.expenses.length &&
            <ChartContainer>
                <Doughnut data={data} onElementsClick={this.onElementsClick} options={{ responsive: true }}/>
            </ChartContainer>
        )
    };
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters),
    dataArray: [
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'home-and-utilities'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'transportation'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'groceries'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'personal-and-family-care'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'health'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'insurance'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'restaurants-and-dining'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'shopping-and-entertainment'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'travel'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'cash-checks-and-misc'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'giving'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'business- selectExpenses(state.expenses, state.filters) '),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'education'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'finance'),
        selectTotalByCategory( selectExpenses(state.expenses, state.filters), 'uncategorized')
    ],
    colorsArray: Object.values(CatColors)
});

const mapDispatchToProps = (dispatch) => ({
    setCategory: (category) => dispatch(setCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseChart);