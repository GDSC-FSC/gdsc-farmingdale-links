import React from 'react';
import { MotionPicture } from '../constants/Motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

export const Picture = ({ framer, framerProps, attributes, key, style, className, children }: SemanticProps) => {
  type SectionMotionProps = typeof MotionPicture extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionPicture {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionPicture>
      ) : (
        <picture {...attributes} className={cn('', className)} style={style}>
          {children}
        </picture>
      )}
    </>
  );
}
