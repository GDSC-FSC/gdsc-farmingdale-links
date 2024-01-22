
import { MotionSection } from '@/src/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Section: React.FC<Prettify<SemanticProps<'section'>>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
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
