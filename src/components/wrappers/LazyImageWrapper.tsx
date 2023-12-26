import { PropsWithChildren, cloneElement, isValidElement, DetailedReactHTMLElement, ImgHTMLAttributes, FC, Children } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
