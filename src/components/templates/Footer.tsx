import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

function Footer({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof motion.footer extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <motion.footer {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </motion.footer>
      ) : (
        <footer {...attributes} className={cn('', className)} style={style}>
          {children}
        </footer>
      )}
    </>
  );
}
export default memo(Footer);
