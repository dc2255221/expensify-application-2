import styled from 'styled-components';
import { Colors, FontSize, Spacing } from '../constants';

export const ContentContainer = styled.div`
    margin: 0 auto;
    padding: 0 ${Spacing.m_size};
    max-width: 80rem;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Spacing.m_size};
    @media (min-width: ${Spacing.desktop_breakpoint}) {
        flex-direction: row;
        margin-bottom: ${Spacing.l_size};
    }
`;

export const InputGroupItem = styled.div`
    margin-bottom: ${Spacing.s_size};
    @media (min-width: ${Spacing.desktop_breakpoint}) {
        margin: 0 ${Spacing.s_size} 0 0;
    }
`;

export const StyledInput = styled.input`
    border: 1px solid #cacccd;
    height: 50px;
    font-size: ${FontSize.large};
    font-weight: 300;
`;

export const StyledSelect = styled.select`
    border: 1px solid #cacccd;
    height: 50px;
    font-size: ${FontSize.large};
    font-weight: 300;
`;

