import { Button } from "@/src/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { useCurrentUser } from "@/src/core/auth";
import { LoginButton, LogoutButton } from "@/src/components/custom/index";
import { iconComponents } from "@/src/constants";

const AuthButtons = [
  <LoginButton signInMethod={`google.com`} />,
  <LogoutButton />,
]

interface AuthRoutesProps {
  routes: {
    label: string;
    icon: React.ReactNode;
    href: string;
    authenticated: boolean;
  }[];
}

const AuthRoutes: AuthRoutesProps['routes'] = [
  {
    label: "Login",
    icon: iconComponents[0].auth[0],
    href: `/auth/login`,
    authenticated: false,
  },
  {
    label: "Signup",
    icon: iconComponents[0].auth[1],
    href: `/auth/signup`,
    authenticated: false,
  },
  {
    label: "Forgot Password",
    icon: iconComponents[0].auth[2],
    href: `/auth/forgot-password`,
    authenticated: true,
  },
  {
    label: "Reset Password",
    icon: iconComponents[0].auth[3],
    href: `/auth/reset-password`,
    authenticated: true,
  },
];

export const AuthItems = () => {
  const user = useCurrentUser();
  return (
    <>
      {user ? AuthButtons[1] : AuthButtons[0]}
    </>
  );
};

export const NavItems = () => {
  const router = useNavigate();
  const onClick = (href: string) => {
    router(`${href}`);
  };
  const pathname = useLocation();
  const user = useCurrentUser();
  return (
    <>
      {AuthRoutes.map((route, index) => {
        if (route.authenticated === !!user) {
          return (
            <Button
              key={index}
              onClick={() => onClick(route.href)}
              className={cn(
                "flex items-center justify-center w-full h-12 px-4 text-left",
                pathname.pathname === route.href
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              )}
            >
              {route.icon}
              <span className="ml-4">{route.label}</span>
            </Button>
          );
        } else if (route.authenticated !== !!user) {
          return (
            <Button
              key={index}
              onClick={() => onClick(route.href)}
              className={cn(
                "flex items-center justify-center w-full h-12 px-4 text-left",
                pathname.pathname === route.href
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              )}
            >
              {route.icon}
              <span className="ml-4">{route.label}</span>
            </Button>
          );
        } else {
          return null;
        }
      })}
      <AuthItems />
    </>
  );
}
