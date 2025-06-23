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
import { EmailWrapper } from './components/wrapper';
import { EmailHeading } from './components/heading';
import { CtaButton } from './components/cta-button';
import { EmailFooter } from './components/footer';
import { EmailHeader } from './components/header';
import { EmailContent } from './components/content';
import { Meta } from './components/meta';
import { getBodyStyle } from './lib/get-body-style';

export const ResetPassword = () => {
  const productName = configuration.productName;
  const previewText = `Reset your password | ${productName}`;
  const href = `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery&next={{ .SiteURL }}/update-password`;
  const style = getBodyStyle();

  return (
    <Html>
      <Head>
        <Meta />
      </Head>

      <Preview>{previewText}</Preview>

      <Tailwind>
        <Body style={style}>
          <EmailWrapper>
            <EmailHeader>
              <EmailHeading>Reset your {productName} password</EmailHeading>
            </EmailHeader>

            <EmailContent>
              <Text className="text-[#242424] text-[16px] leading-[20px]">
                Please click the button below to reset your password.
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <CtaButton href={href}>Reset Password</CtaButton>
              </Section>
            </EmailContent>

            <EmailFooter>{productName}</EmailFooter>
          </EmailWrapper>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResetPassword;
