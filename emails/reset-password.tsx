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

export const ResetPassword = () => {
  const productName = configuration.productName;
  const previewText = `Reset your password | ${productName}`;
  const href = `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery&next={{ .RedirectTo }}`;

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
              <EmailHeading>Reset your {productName} password</EmailHeading>
            </EmailHeader>

            <EmailContent>
              <Text className="text-black text-[14px] leading-[24px]">
                Please click the button below to reset your password.
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <CtaButton href={href}>
                  Reset Password
                </CtaButton>
              </Section>

              <Text className="text-black text-[14px] leading-[24px]">
                or copy and paste this URL into your browser:{' '}
                <Link
                  href={`{{ .ConfirmationURL }}`}
                  className="text-blue-600 no-underline"
                >
                  {`{{ .ConfirmationURL }}`}
                </Link>
              </Text>
            </EmailContent>

            <EmailFooter>{productName}</EmailFooter>
          </EmailWrapper>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResetPassword;
