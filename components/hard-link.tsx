import type { ComponentPropsWithoutRef } from 'react';

type HardLinkProps = ComponentPropsWithoutRef<'a'>;

export function HardLink(props: HardLinkProps) {
  return <a {...props} />;
}
