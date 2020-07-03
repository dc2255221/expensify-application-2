import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithFacebook, startSignupWithEmailAndPassword } from '../actions/auth';
import { BoxLayout, BoxLayoutBox, Title, StyledForm, StyledInput, LoginButton, ButtonContainer, GoogleButton, FacebookButton, StyledSpan, Footer, FooterText, LoginLink, Line } from '../styles/Authentication';

export class SignUpPage extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: ''
    };
    onFirstNameChange = (e) => {
        console.log('first name changed');
        this.setState({ firstName: e.target.value });
    }
    onLastNameChange = (e) => {
        console.log('last name changed');
        this.setState({ lastName: e.target.value });
    }
    onEmailChange = (e) => {
        console.log('email changed');
        this.setState({ email: e.target.value });
    }
    onPasswordChange = (e) => {
        console.log('password changed');
        this.setState({ password: e.target.value });
    }
    onSubmit = (e) => {
        console.log('onSubmit in SignUpPage is called');
        e.preventDefault();
        if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.password) {
            console.log('Please leave no field empty.');
        } else if (!this.state.password.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")) {
            console.log('Please provide a valid password with at least one upper case English letter, one lower case English letter, one digit from 0-9, one special character #?!@$%^&*-, and minimum eight characters in length');
        } else {
            this.setState({ error: '' });
            const { firstName, lastName, email, password } = this.state;
            console.log('will now call startSignupWithEmailAndPassword');
            this.props.startSignupWithEmailAndPassword({ firstName, lastName, email, password });
        }
    }
    render() {
        return (
            <BoxLayout>
                <BoxLayoutBox>
                    <Title> Join Expensify </Title>
                    <StyledForm onSubmit={this.onSubmit}>
                        {/* {this.state.error && <Error>{this.state.error}</Error>} */}
                        <StyledInput 
                            placeholder="First name"
                            type="text"
                            autoFocus
                            value={this.state.firstName}
                            onChange={this.onFirstNameChange}
                        />
                        <StyledInput 
                            placeholder="Last name"
                            type="text"
                            autoFocus
                            value={this.state.lastName}
                            onChange={this.onLastNameChange}   
                        />
                        <StyledInput 
                            placeholder="Email"
                            type="email"
                            autoFocus
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />    
                        <StyledInput 
                            placeholder="Password"
                            type="text"
                            autoFocus
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                        <LoginButton 
                            type="submit" 
                        > 
                            Continue 
                        </LoginButton>
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
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
    startSignupWithEmailAndPassword: (userData) => dispatch(startSignupWithEmailAndPassword(userData.email, userData.password))
});

export default connect(undefined, mapDispatchToProps)(SignUpPage);