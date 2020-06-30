import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { BoxLayout, BoxLayoutBox, Title, Button } from '../styles/LoginPage';

export const LoginPage = ({ startLogin }) => (
    <BoxLayout>
        <BoxLayoutBox>
            <Title> Expensify </Title>
            <p> It's time to get your expenses under control </p>
            <Button className="login-button" onClick={startLogin}> Login with Google </Button>
        </BoxLayoutBox>
    </BoxLayout>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);