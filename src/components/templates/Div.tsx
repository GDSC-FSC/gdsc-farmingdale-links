import React from 'react';
import { MotionDiv } from '../constants/Motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

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