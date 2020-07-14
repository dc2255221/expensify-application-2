import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { StyledHeader, ContentContainer, HeaderContent, StyledLink, StyledH1, StyledButton } from '../styles/Header';
import Link from './Link';

export const Header = ({ startLogout }) => (
    <StyledHeader>
      <ContentContainer>
        <HeaderContent>
          <StyledLink to="/dashboard"> 
            <StyledH1>Expensify</StyledH1> 
          </StyledLink>
          <Link/>
          <StyledButton onClick={startLogout}> Logout </StyledButton>
        </HeaderContent>
      </ContentContainer>
    </StyledHeader>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);