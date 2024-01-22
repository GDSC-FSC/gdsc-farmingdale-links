
import { MotionFigure } from '@/src/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Figure: React.FC<Prettify<SemanticProps<'figure'>>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
  type SectionMotionProps = typeof MotionFigure extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionFigure {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionFigure>
      ) : (
        <figure {...attributes} className={cn('', className)} style={style}>
          {children}
        </figure>
      )}
    </>
  );
}
