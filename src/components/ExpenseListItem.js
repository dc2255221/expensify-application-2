// Need to tranform h3 element to a link to the edit page of expense id

import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`} activeClassName="is-active"> 
            <h3> {description} </h3>
        </Link>
        <p> 
            {numeral(amount / 100).format('$0,0.00')} 
            - 
            {moment(createdAt).format('MMMM Do, YYYY')} 
        </p>
    </div>
);

export default ExpenseListItem;