import styled from 'styled-components';
import { Colors, FontSize, Spacing } from '../constants';

export const PageHeader = styled.div`
    background: ${Colors.off_white};
    margin-bottom: ${Spacing.l_size};
    padding: ${Spacing.m_size} 0;
`;

export const ContentContainer = styled.div`
    margin: 0 auto;
    padding: 0 ${Spacing.m_size};
    max-width: 80rem;
`;

export const StyledH1 = styled.h1`
    font-weight: 300;
    margin: ${Spacing.s_size} 0;
`;
