
import { MotionHeader } from '@/src/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Header: React.FC<Prettify<SemanticProps<'header'>>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
  type SectionMotionProps = typeof MotionHeader extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionHeader {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionHeader>
      ) : (
        <header {...attributes} className={cn('', className)} style={style}>
          {children}
        </header>
      )}
    </>
  );
}
