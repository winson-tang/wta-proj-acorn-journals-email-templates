import { Img } from '@react-email/components';
import * as React from 'react';

export function Logo(props: { className?: string }) {
  return (
    <Img className={props.className} src={'../../static/logo.png'} width={80} />
  );
}
