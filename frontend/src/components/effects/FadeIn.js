import styled,  { keyFrames } from 'styled-components'

const fadeIn = keyFrames`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const FadeIn = ({ duration = 300, delay = 0, children, ...delegated }) => {
  return (
    <Wrapper {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + "ms",
        animationDelay: delay + "ms",
      }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;

export default FadeIn;