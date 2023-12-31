import React from 'react';
import { MotionMain } from '@/src/components/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Main = ({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) => {
  type SectionMotionProps = typeof MotionMain extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionMain {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionMain>
      ) : (
        <main {...attributes} className={cn('', className)} style={style}>
          {children}
        </main>
      )}
    </>
  );
}