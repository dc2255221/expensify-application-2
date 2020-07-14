import moment from 'moment';
// Filters Reducer
const filtersReducerDefaultState = {
    category: '',
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.category
            }
        case 'RESET_CATEGORY':
            return {
                ...state,
                category: ''
            }
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default: 
            return state;
    }
}
