import React from 'react';
import { MotionSection } from '@/src/components/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Section = ({ framer, children, className, style, framerProps, attributes, key }: NonNullable<SemanticProps>) => {
  type SectionMotionProps = typeof MotionSection extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionSection
          {...(framerProps as SectionMotionProps)}
          className={cn('', className)}
          style={style}
          key={key}
        ></MotionSection>
      ) : (
        <section {...attributes} className={cn('', className)} style={style}>
          {children}
        </section>
      )}
    </>
  );
}