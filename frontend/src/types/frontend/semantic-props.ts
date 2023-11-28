import React, { PropsWithChildren } from 'react';
import { HTMLMotionProps } from 'framer-motion';

type Semantics =
  | 'article'
  | 'aside'
  | 'div'
  | 'figure'
  | 'footer'
  | 'header'
  | 'main'
  | 'menu'
  | 'nav'
  | 'picture'
  | 'section';
export interface SemanticProps extends PropsWithChildren {
  framer?: boolean;
  framerProps?: HTMLMotionProps<Semantics>;
  attributes?: React.HTMLAttributes<HTMLElement>;
  key?: string | number;
  style?: React.CSSProperties;
  className?: string;
}
