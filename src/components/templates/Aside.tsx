import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

function Aside({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof motion.aside extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <motion.aside {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </motion.aside>
      ) : (
        <aside {...attributes} className={cn('', className)} style={style}>
          {children}
        </aside>
      )}
    </>
  );
}
export default memo(Aside);
