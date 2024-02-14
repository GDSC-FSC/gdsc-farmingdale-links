import { LoginButton } from "@/src/components/custom/index";
import { ContainerWrapper } from "@/src/components/layouts";

export const Component = function Login(): JSX.Element {
  return (
    <ContainerWrapper Element={`article`}>
      <h2 className={`

      `}>
        Sign In
      </h2>
      <LoginButton signInMethod="google.com" />
      <LoginButton signInMethod="anonymous" />
    </ContainerWrapper>
  );
};
