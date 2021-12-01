import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container, Header, Input, Title
} from './styles';

export function UIInput({ title, ...rest }: { title: string } & TextInputProps) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>

      <Input {...rest} />
    </Container>
  );
}
