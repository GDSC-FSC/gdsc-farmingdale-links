import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

function Menu({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof motion.menu extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <motion.menu {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </motion.menu>
      ) : (
        <menu {...attributes} className={cn('', className)} style={style}>
          {children}
        </menu>
      )}
    </>
  );
}

export default memo(Menu);
