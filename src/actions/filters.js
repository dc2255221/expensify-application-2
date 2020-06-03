// store action creators for filters


// SET_TEXT_FILTER Action Creator
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE Action Creator
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT Action Creator
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE Action Creator
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE Action Creator 
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});