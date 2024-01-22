import { MotionPicture } from '@/src/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Picture: React.FC<Prettify<SemanticProps<'picture'>>> = ({ framer, framerProps, attributes, key, style, className, children }) => {
  type SectionMotionProps = typeof MotionPicture extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionPicture {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionPicture>
      ) : (
        <picture {...attributes} className={cn('', className)} style={style}>
          {children}
        </picture>
      )}
    </>
  );
}
