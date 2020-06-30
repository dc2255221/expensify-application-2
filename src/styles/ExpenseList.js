import styled from 'styled-components';
import { Colors, Spacing } from '../constants';

export const ContentContainer = styled.div`
    margin: 0 auto;
    padding: 0 ${Spacing.m_size};
    max-width: 80rem;
`;

export const ListHeader = styled.div`
    background: ${Colors.off_white};
    border: 1px solid ${Colors.dark_off_white};
    color: ${Colors.grey};
    display: flex;
    justify-content: space-between;
    padding: ${Spacing.s_size} ${Spacing.m_size}; 
`;

export const ListBody = styled.div`
    margin-bottom: ${Spacing.m_size};
    @media (min-width: ${Spacing.desktop_breakpoint}) {
        margin-bottom: ${Spacing.l_size};
    }
`;

export const ShowForMobile = styled.div`
    @media (min-width: ${Spacing.desktop_breakpoint}) {
        display: none;
    }
`;

export const ShowForDesktop = styled.div`
    @media (max-width: ${Spacing.desktop_breakpoint}) {
        display: none;
    }
`;

export const NoExpenseMessage = styled.div`
    align-items: center;
    border: 1px solid ${Colors.dark_off_white};
    border-top: none;
    color: ${Colors.grey};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${Spacing.m_size};
    text-decoration: none;
    transition: background .3s ease; 
    &:hover {
        background: none;
    }
`;