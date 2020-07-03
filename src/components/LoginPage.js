import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithFacebook, startLoginWithEmailAndPassword } from '../actions/auth';
import { BoxLayout, BoxLayoutBox, Title, StyledForm, StyledInput, ForgotLink, LoginButton, ButtonContainer, GoogleButton, FacebookButton, StyledSpan, Footer, FooterText, SignUpLink, Line } from '../styles/Authentication';

export class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
        error: ''
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState({ email });
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState({ password });
    }
    onSubmit = (e) => {
        console.log('onSubmit in LoginPage is called');
        e.preventDefault();
        this.props.startLoginWithEmailAndPassword(this.state.email, this.state.password);
    }
    render() {
        return (
            <BoxLayout>
                <BoxLayoutBox>
                    <Title> Log In </Title>
                    <StyledForm onSubmit={this.onSubmit}>
                        {/* {this.state.error && <Error>{this.state.error}</Error>} */}
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
                        <ForgotLink to='/forgot'> Forgot password? </ForgotLink>
                        <LoginButton type="submit" onSubmit={this.onSubmit}> Continue </LoginButton>
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
                        <FooterText> Don't have an account? </FooterText>
                        <SignUpLink to="/signup"> Sign Up </SignUpLink>
                    </Footer>
                </BoxLayoutBox>
            </BoxLayout>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
    startLoginWithEmailAndPassword: (email, password) => dispatch(startLoginWithEmailAndPassword(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);