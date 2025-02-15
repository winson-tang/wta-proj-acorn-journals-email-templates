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
import { CtaButton } from './components/cta-button';
import { EmailFooter } from './components/footer';
import { EmailHeading } from './components/heading';
import { BodyStyle } from './components/body-style';
import { EmailContent } from './components/content';
import { EmailHeader } from './components/header';

export const ChangeEmailAddress = () => {
  const productName = configuration.productName;
  const previewText = `Confirm Change of Email | ${productName}`;

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
                <EmailHeading>Confirm Change of Email</EmailHeading>
              </EmailHeader>

              <Text className="text-[#242424] text-[16px] leading-[20px]">
                Follow this link to confirm the update of your email from{' '}
                {`{{ .Email }}`} to {`{{ .NewEmail }}`}
              </Text>

              <Section className="text-center mt-[32px] mb-[32px]">
                <CtaButton href={`{{ .ConfirmationURL }}`}>
                  Confirm Email Change
                </CtaButton>
              </Section>

              <Text className="text-[#242424] text-[16px] leading-[20px]">
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

export default ChangeEmailAddress;
