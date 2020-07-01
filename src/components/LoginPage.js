import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';
import { BoxLayout, BoxLayoutBox, Title, ButtonContainer, GoogleButton, FacebookButton } from '../styles/LoginPage';

export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
    <BoxLayout>
        <BoxLayoutBox>
            <Title> Expensify </Title>
            <p> It's time to get your expenses under control </p>
            <ButtonContainer>
                <GoogleButton onClick={startLoginGoogle}> Login with Google </GoogleButton>
                <FacebookButton onClick={startLoginFacebook}> Login with Facebook </FacebookButton>
            </ButtonContainer>
        </BoxLayoutBox>
    </BoxLayout>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);