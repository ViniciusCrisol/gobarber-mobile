import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useField } from '@unform/core';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const hanldeInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInpurBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isField ? '#ff9000' : '#666360'}
      />
      <TextInput
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        defaultValue={defaultValue}
        onFocus={hanldeInputFocus}
        onBlur={handleInpurBlur}
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
