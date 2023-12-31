import React from 'react';
import { MotionHeader } from '@/src/components/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Header = ({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) => {
  type SectionMotionProps = typeof MotionHeader extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionHeader {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionHeader>
      ) : (
        <header {...attributes} className={cn('', className)} style={style}>
          {children}
        </header>
      )}
    </>
  );
}
