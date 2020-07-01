import styled from 'styled-components';
import { Colors, FontSize, Spacing } from '../constants';

export const BoxLayout = styled.div`
    align-items: center;
    background: url('/images/darkweb.jpg');
    background-size: cover;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`; 

export const BoxLayoutBox = styled.div`
    background: white;
    border-radius: 3px;
    padding: ${Spacing.l_size} ${Spacing.m_size};
    text-align: center;
    width: 21rem;
    opacity: 0.9;
`;

export const Title = styled.h1`
    margin: 0 0 ${Spacing.m_size} 0;
    line-height: 1;
`; 

export const ButtonContainer = styled.div`
    display: flex;
`;

export const GoogleButton = styled.button`
    background: ${Colors.red};
    border: none;
    color: white;
    font-size: ${FontSize.large};
    font-weight: 300;
    padding: ${Spacing.s_size};
    cursor: pointer;
`;

export const FacebookButton = styled.button`
    background: ${Colors.blue};
    border: none;
    color: white;
    font-size: ${FontSize.large};
    font-weight: 300;
    padding: ${Spacing.s_size};
    cursor: pointer;
`;