import React from 'react';
import { connect } from 'react-redux';

export const ErrorMessage = (props) => (
    <h3> {props.message} </h3>
);

const mapToStateToProps = (state) => (
    {
        message: state.error.message
    }
);

export default connect(mapToStateToProps)(ErrorMessage);
