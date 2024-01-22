
import { MotionFooter } from '@/src/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Footer: React.FC<Prettify<SemanticProps<'footer'>>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
  type SectionMotionProps = typeof MotionFooter extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionFooter {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionFooter>
      ) : (
        <footer {...attributes} className={cn('', className)} style={style}>
          {children}
        </footer>
      )}
    </>
  );
}

