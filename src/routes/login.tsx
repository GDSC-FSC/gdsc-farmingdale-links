import { Container, ContainerProps, Typography } from "@mui/joy";
import { LoginButton } from "@/src/components";

export const Component = function Login(): JSX.Element {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "80%",
        gap: 1,
        maxWidth: "280px !important",
      }}
      maxWidth="xs"
    >
      <Typography sx={{ mb: 1, textAlign: "center" }} level="h2">
        Sign In
      </Typography>

      <LoginButton signInMethod="google.com" />
      <LoginButton signInMethod="anonymous" />
    </Container>
  );
};

export type LoginProps = Omit<ContainerProps, "children">;
