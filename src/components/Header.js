import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { resetCategory } from '../actions/filters';
import { StyledHeader, ContentContainer, HeaderContent, StyledLink, StyledH1, StyledButton } from '../styles/Header';
// import Link from './Link';

export const Header = ({ startLogout, resetCategory }) => (
    <StyledHeader>
      <ContentContainer>
        <HeaderContent>
          <StyledLink to="/dashboard" onClick={resetCategory}> 
            <StyledH1>Xpensify</StyledH1> 
          </StyledLink>
          {/* <Link/>  */}
          <StyledButton onClick={startLogout}> Logout </StyledButton>
        </HeaderContent>
      </ContentContainer>
    </StyledHeader>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  resetCategory: () => dispatch(resetCategory())
});

export default connect(undefined, mapDispatchToProps)(Header);