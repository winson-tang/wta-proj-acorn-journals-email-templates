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

export const MagicLink = () => {
  const productName = configuration.productName;
  const inviteLink = `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=magiclink&callback={{ .RedirectTo }}`;
  const previewText = `Your sign in link to ${productName}`;

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
              <Text className="text-[#242424] text-[16px] leading-[20px]">
                Hi, welcome to {productName}! Click the button below to login.
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <CtaButton href={inviteLink}>Login to {productName}</CtaButton>
              </Section>

              <Text className="text-[#242424] text-[16px] leading-[20px]">
                or copy and paste this URL into your browser:{' '}
                <Link href={inviteLink} className="text-blue-600 no-underline">
                  {inviteLink}
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

export default MagicLink;
