import React from 'react';
import { MotionDiv } from '@/src/components/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const  Div = ({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) => {
  type SectionMotionProps = typeof MotionDiv extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionDiv {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionDiv>
      ) : (
        <div {...attributes} className={cn('', className)} style={style}>
          {children}
        </div>
      )}
    </>
  );
}