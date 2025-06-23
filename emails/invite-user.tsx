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

export const InviteUser = () => {
  const productName = configuration.productName;
  const inviteLink = `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=invite&callback={{ .RedirectTo }}`;
  const previewText = `You have bee invited to join - ${productName}`;
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
              <EmailHeading>
                You have been invited to {productName}
              </EmailHeading>
            </EmailHeader>

            <EmailContent>
              <Text className="text-[#242424] text-[16px] leading-[20px]">
                You have been invited to create a user on {productName}. Follow
                this link to accept the invite:
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <CtaButton href={inviteLink}>
                  Accept invite to {productName}
                </CtaButton>
              </Section>
            </EmailContent>

            <EmailFooter>{productName}</EmailFooter>
          </EmailWrapper>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default InviteUser;
