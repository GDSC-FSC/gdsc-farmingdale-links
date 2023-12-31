import React from 'react';
import { MotionFigure } from '../constants/Motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

export const Figure = ({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) => {
  type SectionMotionProps = typeof MotionFigure extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionFigure {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionFigure>
      ) : (
        <figure {...attributes} className={cn('', className)} style={style}>
          {children}
        </figure>
      )}
    </>
  );
}
