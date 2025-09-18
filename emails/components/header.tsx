import { Section } from '@react-email/components';
import * as React from 'react';

export function EmailHeader(props: React.PropsWithChildren) {
  return (
    <Section>
      <Section>{props.children}</Section>
    </Section>
  );
}
