import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Logo, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo source={logoImg} />
      <Title>Faça seu logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="passowrd" icon="lock" placeholder="Senha" />

      <Button onPress={() => console.log('OK')}>Entrar</Button>
    </Container>
  );
};

export default SignIn;
