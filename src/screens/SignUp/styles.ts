import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: 64px 0 24px;

  color: #f4ede8;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  padding: 16px 0 ${16 + getBottomSpace()}px;
  background: #312e38;

  border-top-width: 1px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackToSignInText = styled.Text`
  color: white;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';

  margin-left: 16px;
`;
