import React from 'react';
import { BoxLayout, BoxLayoutBox, Title, StyledForm, StyledInput, LoginButton, Footer, FooterText, SignUpLink, Line } from '../styles/Authentication';

export const ForgotPasswordPage = () => (
    <BoxLayout>
        <BoxLayoutBox>
            <Title> Forgot Password </Title>
            <StyledForm>
                <StyledInput placeholder="Email"></StyledInput>
                <LoginButton> Continue </LoginButton>
            </StyledForm>
            <Line/>
            <Footer>
                <FooterText> Don't have an account? </FooterText>
                <SignUpLink to="/signup"> Sign Up </SignUpLink>
            </Footer>
        </BoxLayoutBox>
    </BoxLayout>
);

export default ForgotPasswordPage;