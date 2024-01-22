
import { MotionDiv } from '@/src/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Div: React.FC<Prettify<SemanticProps<'div'>>> = ({ framer, children, className, style, attributes,  framerProps, key }) => {
  type SectionMotionProps = typeof MotionDiv extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionDiv {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionDiv>
      ) : (
        <div {...attributes}  className={cn('', className)} style={style}>
          {children}
        </div>
      )}
    </>
  );
}
