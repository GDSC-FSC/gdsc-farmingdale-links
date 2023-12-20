import React from 'react';
import { MotionMenu } from '../constants/Motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

export const Menu = ({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) => {
  type SectionMotionProps = typeof MotionMenu extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionMenu {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionMenu>
      ) : (
        <menu {...attributes} className={cn('', className)} style={style}>
          {children}
        </menu>
      )}
    </>
  );
}