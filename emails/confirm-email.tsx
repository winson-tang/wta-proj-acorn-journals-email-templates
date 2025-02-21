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

export const ConfirmEmail = () => {
  const productName = configuration.productName;
  const confirmLink = `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email&callback={{ .RedirectTo }}`;
  const previewText = `Confirm your email - ${productName}`;

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
              <EmailHeading>Confirm your email to get started</EmailHeading>
            </EmailHeader>

            <EmailContent>
              <Text className="text-[#242424] text-[16px] leading-[20px]">
                You're almost there! To complete your registration, please click
                the button below.
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <CtaButton href={confirmLink}>Login to {productName}</CtaButton>
              </Section>

              <Text className="text-[#242424] text-[16px] leading-[20px]">
                or copy and paste this URL into your browser:{' '}
                <Link href={confirmLink} className="text-blue-600 no-underline">
                  {confirmLink}
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

export default ConfirmEmail;
