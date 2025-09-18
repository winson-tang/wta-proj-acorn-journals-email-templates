import * as React from 'react';

import { Section } from '@react-email/components';
import { Logo } from './logo';
import { configuration } from '../../config';

export function EmailContent({
  children,
  className,
  displayLogo = configuration.displayLogo,
}: React.PropsWithChildren<{
  className?: string;
  displayLogo?: boolean;
}>) {
  return (
    <Section
      className={'rounded-xl bg-white px-[48px] py-[36px] ' + className || ''}
    >
      {displayLogo && (
        <Section className={'mb-4'}>
          <Logo />
        </Section>
      )}

      {children}
    </Section>
  );
}
