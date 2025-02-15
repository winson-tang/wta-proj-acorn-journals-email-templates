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
import {EmailHeader} from "./components/header";
import {EmailContent} from "./components/content";

export const InviteUser = () => {
  const productName = configuration.productName;
  const inviteLink = `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=invite&callback={{ .RedirectTo }}`;
  const previewText = `You have bee invited to join - ${productName}`;

  return (
    <Html>
      <Head>
        <BodyStyle />
      </Head>

      <Preview>{previewText}</Preview>

      <Tailwind>
        <Body>
          <EmailWrapper>
            <EmailContent>
              <EmailHeader>
                <EmailHeading>You have been invited to {productName}</EmailHeading>
              </EmailHeader>

              <Text className="text-[#242424] text-[16px] leading-[20px]">
                You have been invited to create a user on {productName}. Follow
                this link to accept the invite:
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <CtaButton href={inviteLink}>
                  Accept invite to {productName}
                </CtaButton>
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

export default InviteUser;
