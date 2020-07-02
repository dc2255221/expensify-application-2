import { Link } from 'react-router-dom';
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
    padding: ${Spacing.m_size} ${Spacing.m_size};
    margin-bottom: ${Spacing.small};
    text-align: center;
    width: 22rem;
    opacity: 0.9;
`;

export const Title = styled.h2`
    margin: 0 0 ${Spacing.s_size} 0;
    line-height: 1;
`; 

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const StyledInput = styled.input`
    background: ${Colors.light_blue};
    border: 1px solid #ccc;
    margin-bottom: ${Spacing.s_size};
    padding: ${Spacing.xs_size} ${Spacing.xs_size};
`;

export const ForgotLink = styled(Link)`
    font-size: ${FontSize.small};
    align-self: flex-start;
    margin-bottom: ${Spacing.s_size};
`;

export const LoginButton = styled.button`
    background: ${Colors.green};
    border: none;
    color: white;
    font-size: ${FontSize.large};
    font-weight: 300;
    margin-bottom: ${Spacing.s_size};
    padding: ${Spacing.xs_size} ${Spacing.xs_size};
`;

export const Line = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin-bottom: ${Spacing.s_size};
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 ${Spacing.m_size} ${Spacing.s_size} ${Spacing.m_size};
`;

export const GoogleButton = styled.button`
    display: flex;
    align-items: center;
    background: ${Colors.red};
    border: none;
    color: white;
    font-size: ${FontSize.large};
    font-weight: 300;
    padding: ${Spacing.xs_size};
    cursor: pointer;
`;

export const FacebookButton = styled.button`
    display: flex;
    align-items: center;
    background: ${Colors.blue};
    border: none;
    color: white;
    font-size: ${FontSize.large};
    font-weight: 300;
    padding: ${Spacing.xs_size};
    cursor: pointer;
`;

export const StyledSpan = styled.span`
    margin-left: ${Spacing.xs_size}
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${FontSize.small};
`;

export const FooterText = styled.span`
    margin: 0 ${Spacing.s_size} ${Spacing.xs_size} 0;
    color: ${Colors.grey};
    font-weight: 700;
`;

export const SignUpLink = styled(Link)`
    margin-bottom: ${Spacing.xs_size};
    color: ${Colors.green};
`;

export const LoginLink = styled(Link)`
    margin-bottom: ${Spacing.xs_size};
    color: ${Colors.green};
`;