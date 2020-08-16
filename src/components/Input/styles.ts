import styled, { css } from 'styled-components/native';
import { TextInput as Input } from 'react-native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;

  padding: 0 16px;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: #232129;
  border: 2px #232129;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff9000;
    `}

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled(Input)`
  flex: 1;
  margin-left: 16px;

  color: white;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;
