import React from 'react';

import { Container, Logo, Title } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo source={logoImg} />
      <Title>Faça seu logon</Title>
    </Container>
  );
};

export default SignIn;
