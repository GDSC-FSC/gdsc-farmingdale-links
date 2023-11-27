import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

function Article({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof motion.article extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <motion.article {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </motion.article>
      ) : (
        <article {...attributes} className={cn('', className)} style={style}>
          {children}
        </article>
      )}
    </>
  );
}
export default memo(Article);
