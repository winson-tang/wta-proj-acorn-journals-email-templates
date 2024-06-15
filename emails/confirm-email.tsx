import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';
import { configuration } from '../config';

export const ConfirmEmail = () => {
  const productName = configuration.productName;
  const inviteLink = `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=invite&callback={{ .RedirectTo }}`;
  const previewText = `Confirm your email - ${productName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-[#fff] my-auto mx-auto font-sans text-[#484848]">
          <Container className="border border-solid border-[#eaeaea] rounded-md my-[40px] mx-auto p-[36px] max-w-[465px]">
            <Heading className="text-black font-sans tracking-tight text-[24px] font-normal p-0 mx-0">
              Confirm your email to get started
            </Heading>

            <Text className="text-black text-[14px] leading-[24px]">
              You're almost there! To complete your registration, please click
              the button below.
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="w-full bg-[#000000] rounded text-white text-[14px] font-semibold no-underline text-center py-3"
                href={inviteLink}
              >
                Login to {productName}
              </Button>
            </Section>

            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{' '}
              <Link href={inviteLink} className="text-blue-600 no-underline">
                {inviteLink}
              </Link>
            </Text>

            <Hr className="border border-[#efefef] my-[12px] mx-0 w-full" />

            <Text className="text-[12px] leading-[24px] text-gray-300">
              {productName}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmEmail;