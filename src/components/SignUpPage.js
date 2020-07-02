import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithFacebook } from '../actions/auth';
import { BoxLayout, BoxLayoutBox, Title, StyledForm, StyledInput, LoginButton, ButtonContainer, GoogleButton, FacebookButton, StyledSpan, Footer, FooterText, LoginLink, Line } from '../styles/Authentication';

export const SignUpPage = ({ startLoginWithGoogle, startLoginWithFacebook }) => (
    <BoxLayout>
        <BoxLayoutBox>
            <Title> Join Expensify </Title>
            <StyledForm>
                <StyledInput placeholder="First name"></StyledInput>
                <StyledInput placeholder="Last name"></StyledInput>
                <StyledInput placeholder="Email"></StyledInput>
                <StyledInput placeholder="Password"></StyledInput>
                <LoginButton> Continue </LoginButton>
            </StyledForm>
            <Line/>
            <ButtonContainer>
                <FacebookButton onClick={startLoginWithFacebook}> 
                    <img src="/images/facebook.svg" alt="facebook-logo" width="20" height="30"/>
                    <StyledSpan> Continue </StyledSpan>
                </FacebookButton>
                <GoogleButton onClick={startLoginWithGoogle}> 
                    <img src="/images/google.svg" alt="google-logo" width="20" height="30"/>
                    <StyledSpan> Continue </StyledSpan> 
                </GoogleButton>
            </ButtonContainer>
            <Line/>
            <Footer>
                <FooterText> Already a member? </FooterText>
                <LoginLink to="/"> Log in </LoginLink>
            </Footer>
        </BoxLayoutBox>
    </BoxLayout>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
});

export default connect(undefined, mapDispatchToProps)(SignUpPage);