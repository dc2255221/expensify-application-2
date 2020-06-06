import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

const altFilters2 = {
    text: 'r',
    sortBy: 'amount',
    startDate: moment(0).subtract(10, 'days'),
    endDate: moment(0).add(10, 'days')
}

export { filters, altFilters, altFilters2 }; // named exports 