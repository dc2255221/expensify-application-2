import styled from 'styled-components';
import { Colors, FontSize, Spacing } from '../constants';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    > * {
        margin-bottom: ${Spacing.m_size}
    }
`;

export const Error = styled.p`
    margin: 0 0 ${Spacing.m_size} 0;
    font-style: italic;
`;

export const StyledInput = styled.input`
    border: 1px solid #cacccd;
    height: 50px;
    font-size: ${FontSize.large};
    font-weight: 300;
`;

export const StyledDiv = styled.div`
    border: 1px solid #cacccd;
    height: 48px;
    font-size: ${FontSize.large};
    font-weight: 300;
`;

export const StyledLabel = styled.label`
`;

export const StyledSelect = styled.select`
    border: 1px solid #cacccd;
    height: 50px;
    font-size: ${FontSize.large};
    font-weight: 300;
`;

export const StyledTextarea = styled.textarea`
    border: 1px solid #cacccd;
    height: 50px;
    font-size: ${FontSize.large};
    font-weight: 300;
`;

export const StyledButton = styled.button`
    background: ${Colors.dark_blue};
    color: white;
    border: 1px solid #cacccd;
    height: 50px;
    font-size: ${FontSize.large};
    font-weight: 300;
`;