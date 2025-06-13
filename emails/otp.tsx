import {
  Body,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

import { configuration } from '../config';
import { BodyStyle } from './components/body-style';
import { EmailWrapper } from './components/wrapper';
import { EmailHeading } from './components/heading';
import { CtaButton } from './components/cta-button';
import { EmailFooter } from './components/footer';
import { EmailHeader } from './components/header';
import { EmailContent } from './components/content';

export const Otp = () => {
  const productName = configuration.productName;
  const previewText = `Your sign in link to ${productName}`;
  const tokenText = `{{ .Token }}`;

  return (
    <Html>
      <Head>
        <BodyStyle />
      </Head>

      <Preview>{previewText}</Preview>

      <Tailwind>
        <Body>
          <EmailWrapper>
            <EmailHeader>
              <EmailHeading>Login to {productName}</EmailHeading>
            </EmailHeader>

            <EmailContent>
              <Text className="text-[#242424] text-[16px] leading-[20px] mt-2">
                Enter the code below to sign in to your {productName} account:
              </Text>

              <Section className="text-center mt-[32px] mb-[32px] bg-[#F3F4F6] px-1 py-4">
                <Text className={'font-medium text-[30px]'}>
                  {tokenText}
                </Text>
              </Section>

              <Text className={'text-[#242424] text-[12px] leading-[20px] mt-2'}>
                If you did not request this code, please ignore this email.
              </Text>
            </EmailContent>

            <EmailFooter>{productName}</EmailFooter>
          </EmailWrapper>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Otp;
