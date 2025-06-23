import { Section, Text } from '@react-email/components';
import * as React from 'react';

export function EmailFooter(props: React.PropsWithChildren) {
  return (
    <Section>
      <Text className="text-[12px] leading-[20px] text-gray-300 px-4">
        {props.children}
      </Text>
    </Section>
  );
}
