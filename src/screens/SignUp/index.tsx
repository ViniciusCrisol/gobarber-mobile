import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useNavigation } from '@react-navigation/native';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Form ref={formRef} onSubmit={(data) => console.log(data)}>
              <Input name="name" icon="user" placeholder="Nome" />
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                keyboardType="email-address"
              />
              <Input
                name="passowrd"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
              />
            </Form>

            <Button onPress={() => formRef.current?.submitForm()}>
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="white" />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
