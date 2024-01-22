
import { MotionMenu } from '@/src/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Menu: React.FC<Prettify<SemanticProps<'menu'>>> = ({ framer, children, className, style, framerProps, attributes, key }) => {
  type SectionMotionProps = typeof MotionMenu extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionMenu {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionMenu>
      ) : (
        <menu {...attributes} className={cn('', className)} style={style}>
          {children}
        </menu>
      )}
    </>
  );
}
