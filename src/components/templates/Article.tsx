import React from 'react';
import { MotionArticle } from '../constants/Motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

export const Article = ({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) => {
  type SectionMotionProps = typeof MotionArticle extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionArticle {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionArticle>
      ) : (
        <article {...attributes} className={cn('', className)} style={style}>
          {children}
        </article>
      )}
    </>
  );
}