import { Container, Section } from '@react-email/components';
import * as React from 'react';

export function EmailHeader(props: React.PropsWithChildren) {
  return (
    <Container>
      <Section>
        {props.children}
      </Section>
    </Container>
  );
}
