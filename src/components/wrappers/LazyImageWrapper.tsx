import { PropsWithChildren, cloneElement, isValidElement, DetailedReactHTMLElement, ImgHTMLAttributes, FC, Children } from 'react';

const LazyImageWrapper: FC<PropsWithChildren<any>> = (props) => {
  const { children } = props;
  const cloneChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === 'img') {
      return cloneElement(
        child as DetailedReactHTMLElement<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
        { loading: 'lazy' },
      );
    }
    return child;
  });

  return <>{cloneChildren}</>;
};

export default LazyImageWrapper;
