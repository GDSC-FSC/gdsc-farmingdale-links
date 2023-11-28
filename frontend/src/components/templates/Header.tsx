import React from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

export const Header = ({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) => {
  type SectionMotionProps = typeof motion.header extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <motion.header {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </motion.header>
      ) : (
        <header {...attributes} className={cn('', className)} style={style}>
          {children}
        </header>
      )}
    </>
  );
}
