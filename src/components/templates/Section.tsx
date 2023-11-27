import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/frontend/semantic-props';
import { cn } from '../../lib/utils';

function Section({ framer, children, className, style, framerProps, attributes, key }: NonNullable<SemanticProps>) {
  type SectionMotionProps = typeof motion.section extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <motion.section
          {...(framerProps as SectionMotionProps)}
          className={cn('', className)}
          style={style}
          key={key}
        ></motion.section>
      ) : (
        <section {...attributes} className={cn('', className)} style={style}>
          {children}
        </section>
      )}
    </>
  );
}
export default memo(Section);
