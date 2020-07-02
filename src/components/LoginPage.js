import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';
import { BoxLayout, BoxLayoutBox, Title, ButtonContainer, GoogleButton, FacebookButton, StyledSpan } from '../styles/LoginPage';
import ErrorMessage from '../components/ErrorMessage';

export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
    <BoxLayout>
        <BoxLayoutBox>
            <Title> Expensify </Title>
            <p> It's time to get your expenses under control </p>
            <ButtonContainer>
                <FacebookButton onClick={startLoginFacebook}> 
                    <img src="/images/facebook.svg" alt="facebook-logo" width="20" height="30"/>
                    <StyledSpan> Continue </StyledSpan>
                </FacebookButton>
                <GoogleButton onClick={startLoginGoogle}> 
                    <img src="/images/google.svg" alt="google-logo" width="20" height="30"/>
                    <StyledSpan> Continue </StyledSpan> 
                </GoogleButton>
            </ButtonContainer>

        </BoxLayoutBox>
    </BoxLayout>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);