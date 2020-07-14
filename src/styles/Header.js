import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, FontSize, Spacing } from '../constants';

export const StyledHeader = styled.header`
  background:  ${Colors.dark_blue};
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${Spacing.m_size};
  max-width: 80rem;
`;

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${Spacing.s_size};
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const StyledH1 = styled.h1`
  margin: 0;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: ${FontSize.large};
  font-weight: 300;
  padding: ${Spacing.s_size};
  cursor: pointer;
`;