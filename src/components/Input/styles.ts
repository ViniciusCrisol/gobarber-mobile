import styled from 'styled-components/native';
import { TextInput as Input } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 60px;

  padding: 0 16px;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: #232129;

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
