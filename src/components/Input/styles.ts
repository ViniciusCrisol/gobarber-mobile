import styled from 'styled-components/native';

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

export const TextInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: '#666360',
  keyboardApparence: 'dark',
}))`
  flex: 1;
  margin-left: 16px;

  color: white;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;
