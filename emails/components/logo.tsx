import { Img } from '@react-email/components';
import * as React from 'react';

export function Logo(props: { className?: string }) {
  return (
    <Img
      className={props.className}
      src={'https://lwjgsigutkkuxolfsxui.supabase.co/storage/v1/object/public/public-assets/assets/logo.png'}
      width={80}
    />
  );
}
