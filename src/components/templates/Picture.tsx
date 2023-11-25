import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

function Picture({ framer, framerProps, attributes, key, style, className, children }: SemanticProps) {
  type SectionMotionProps = typeof motion.picture extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <motion.picture {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </motion.picture>
      ) : (
        <picture {...attributes} className={cn('', className)} style={style}>
          {children}
        </picture>
      )}
    </>
  );
}

export default memo(Picture);
