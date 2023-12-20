import React from "react";
import styled from "styled-components";

export const ScaleBackground = ({
  color,
  transitionDuration,
  children,
  style = {},
  ...delegated
}) => {
  return (
    <Wrapper
      style={{
        '--color': color,
        '--transition-duration': transitionDuration,
        ...style,
      }}
      {...delegated}
    >
      {children}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  &::after {
    background-color: var(--color);
    transition: transform var(--transition-duration);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  &:hover::after {
    transform: scale(1.1);
  }
`;