import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { StyledLink, DescriptionH3, CreatedAtSpan, AmountH3 } from '../styles/ExpenseListItem';

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <StyledLink to={`/edit/${id}`} activeClassName="is-active"> 
        <div>
            <DescriptionH3> {description} </DescriptionH3>
            <CreatedAtSpan> {moment(createdAt).format('MMMM Do, YYYY')} </CreatedAtSpan>
        </div>
        <AmountH3> {numeral(amount / 100).format('$0,0.00')} </AmountH3>
    </StyledLink>
);

export default ExpenseListItem;