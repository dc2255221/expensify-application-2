import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, FontSize, Spacing } from '../constants';

export const StyledLink = styled(Link)`
    border: 1px solid ${Colors.dark_off_white};
    border-top: none;
    color: ${Colors.dark_grey};
    display: flex;
    flex-direction: column;
    padding: ${Spacing.s_size};
    text-decoration: none;
    transition: background .3s ease; 
    &:hover {
        background: ${Colors.off_white}
    }
    @media (min-width: ${Spacing.desktop_breakpoint}) {
        align-items: center;
        flex-direction: row;
        justify-content: space-between; 
        padding: ${Spacing.m_size}  
    }
`;

export const DescriptionH3 = styled.h3`
    margin: 0;
    word-break: break-all;
`;

export const CreatedAtSpan = styled.span`
    color: ${Colors.grey};
    font-size: 1.4rem;
`;

export const AmountH3 = styled.h3`
    margin: ${Spacing.s_size} 0 0 0;
    @media (min-width: ${Spacing.desktop_breakpoint}) {
        margin: 0;
        padding-left: ${Spacing.s_size}; 
    }
`;
