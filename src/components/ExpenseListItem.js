// Need to tranform h3 element to a link to the edit page of expense id

import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`} activeClassName="is-active"> 
            <h3> {description} </h3>
        </Link>
        <p> {amount} - {createdAt} </p>
    </div>
);

export default ExpenseListItem;