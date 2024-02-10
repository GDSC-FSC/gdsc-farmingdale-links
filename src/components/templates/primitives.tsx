import React from 'react'
export const PrimitiveDiv = React.forwardRef<HTMLElement, PrimitiveSemanticProps<HTMLElement>>(
  ({ as: ElementComponent = 'div', children, ...props }, ref) => {
    return React.createElement(ElementComponent as React.ComponentType<any>, { ...props, ref }, children);
  }
);
PrimitiveDiv.displayName = 'Div';
