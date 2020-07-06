import React from 'react';
import { connect } from 'react-redux';
import { startSendPasswordResetEmail } from '../actions/auth';
import { BoxLayout, BoxLayoutBox, Title, StyledForm, StyledInput, LoginButton, Footer, FooterText, SignUpLink, Line, Message } from '../styles/Authentication';

export class ForgotPasswordPage extends React.Component {
    state = {
        email: ''
    }
    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.startSendPasswordResetEmail(this.state.email);
    }
    render() {
        return (
            <BoxLayout>
                <BoxLayoutBox>
                    <Title> Forgot Password </Title>
                    <StyledForm onSubmit={this.onSubmit}>
                        <StyledInput 
                            placeholder="Email"
                            type="input"
                            onChange={this.onEmailChange}
                            value={this.state.email}
                        />
                        {this.props.sendPasswordResetEmail && <Message> Please check your email. You can reset your password in the provided link. </Message>}
                        <LoginButton> Continue </LoginButton>
                    </StyledForm>
                    <Line/>
                    <Footer>
                        <FooterText> Don't have an account? </FooterText>
                        <SignUpLink to="/signup"> Sign Up </SignUpLink>
                    </Footer>
                </BoxLayoutBox>
            </BoxLayout>
        )
    }
};

const mapStateToProps = (state) => ({
    sendPasswordResetEmail: state.auth.sendPasswordResetEmail
});

const mapDispatchToProps = (dispatch) => ({
    startSendPasswordResetEmail: (email) => dispatch(startSendPasswordResetEmail(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);