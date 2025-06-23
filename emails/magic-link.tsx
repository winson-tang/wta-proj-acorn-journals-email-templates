import {
  Body,
  Head,
  Html,
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

export const MagicLink = () => {
  const productName = configuration.productName;
  const confirmLink = `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=magiclink&callback={{ .RedirectTo }}`;
  const previewText = `Your sign in link to ${productName}`;
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
              <EmailHeading>Login to {productName}</EmailHeading>
            </EmailHeader>

            <EmailContent>
              <Text className="text-[#242424] text-[16px] leading-[20px]">
                Hi, welcome to {productName}! Click the button below to login.
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <CtaButton href={confirmLink}>Login to {productName}</CtaButton>
              </Section>
            </EmailContent>

            <EmailFooter>{productName}</EmailFooter>
          </EmailWrapper>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MagicLink;
