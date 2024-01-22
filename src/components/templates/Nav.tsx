
import { MotionNav } from '@/src/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Nav: React.FC<Prettify<SemanticProps<'nav'>>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
  type SectionMotionProps = typeof MotionNav extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionNav {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionNav>
      ) : (
        <nav {...attributes} className={cn('', className)} style={style}>
          {children}
        </nav>
      )}
    </>
  );
}
