import { Button } from "../ui/button";
import { SignInMethod, useSignIn } from "@/src/core/auth";
import { AnonymousIcon, GoogleIcon } from "@/src/components/icons/components";


export function LoginButton(props: LoginButtonProps): JSX.Element {
  const { signInMethod, ...other } = props;
  const [signIn, inFlight] = useSignIn(signInMethod);

  return (
    <Button
      variant={`outline`}
      onClick={signIn}
      disabled={inFlight}
      children={
        <>
          {
            (signInMethod === "google.com") ? (
              <GoogleIcon />
            ) : (signInMethod === "anonymous") ? (
              <AnonymousIcon />
            ) : null}
          {
            (signInMethod === "google.com")
              ? ("Continue via Google")
              : (signInMethod === "anonymous")
                ? ("Continue as anonymous")
                : ("unknown")}
        </>
      }
      {...other}
    />
  );
}

export type LoginButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    signInMethod: SignInMethod;
  },
  "children"
>;
