
import { MotionArticle } from '@/src/constants/Motion';
import { SemanticProps } from '@/src/types/frontend/semantic-props';
import { cn } from '@/src/lib/utils';

export const Article: React.FC<Prettify<SemanticProps<'article'>>> = ({ framer, children, className, attributes, style, framerProps, key }) => {
  type SectionMotionProps = typeof MotionArticle extends React.FC<infer P> ? P : never;
  return (
    <>
      {framer ? (
        <MotionArticle {...(framerProps as SectionMotionProps)} className={cn('', className)} style={style} key={key}>
          {children}
        </MotionArticle>
      ) : (
        <article {...attributes} className={cn('', className)} style={style}>
          {children}
        </article>
      )}
    </>
  );
}
