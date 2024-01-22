
import { MotionMain } from '@/src/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Main: React.FC<Prettify<SemanticProps<'main'>>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
  type SectionMotionProps = typeof MotionMain extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionMain {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionMain>
      ) : (
        <main {...attributes} className={cn('', className)} style={style}>
          {children}
        </main>
      )}
    </>
  );
}
