import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors, FontSize, Spacing } from '../constants';

export const PageHeader = styled.div`
    background: #f7f7f7;
    margin-bottom: ${Spacing.l_size};
    padding: ${Spacing.m_size} 0;
`;

export const ContentContainer = styled.div`
    margin: 0 auto;
    max-width: 80rem;
    padding: 0 ${Spacing.m_size};
`;

export const StyledH1 = styled.h1`
    font-weight: 300;
    margin: ${Spacing.s_size} 0;
`;

export const StyledSpan = styled.span`
    font-weight: 700;
`;

export const StyledLink = styled(Link)`
    background: ${Colors.dark_blue};
    border: none;
    color: white;
    display: inline-block;
    fondt-size: ${FontSize.large};
    font-weight: 300;
    line-height: 1;
    padding: ${Spacing.s_size};
    text-decoration: none;
`;

export const StyledDiv = styled.div`
    margin-top: ${Spacing.m_size};
`;
