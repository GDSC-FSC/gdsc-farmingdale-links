import { LoginButton, LogoutButton } from "@/src/components/custom/index";
import { Button } from "@/src/components/ui/button";
import { iconComponents } from "@/src/constants";
import { useCurrentUser } from "@/src/core/auth";
import { cn } from "@/src/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const AuthButtons = [
	<LoginButton
		className={`rounded-t-none w-full`}
		signInMethod={`google.com`}
	/>,
	<LogoutButton className={`rounded-t-none w-full`} />,
];

interface AuthRoutesProps {
	routes: {
		label: string;
		icon: React.ReactNode;
		href: string;
		authenticated: boolean;
	}[];
}

const AuthRoutes: AuthRoutesProps["routes"] = [
	{
		label: "Login",
		icon: iconComponents[0].auth[0],
		href: `/auth/login`,
		authenticated: false,
	},
];

export const AuthItems = () => {
	const user = useCurrentUser();
	return <>{user ? AuthButtons[1] : AuthButtons[0]}</>;
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
								"flex items-center justify-between w-full h-10 text-left rounded-none bg-foreground-100 dark:bg-background-800",
								pathname.pathname === route.href
									? "bg-gray-100 text-gray-900"
									: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
							)}
						>
							{route.icon}
							<span className="right-0">{route.label}</span>
						</Button>
					);
				} else if (route.authenticated !== !!user) {
					return (
						<Button
							key={index}
							onClick={() => onClick(route.href)}
							className={cn(
								"flex items-center justify-between w-full h-10 text-left  rounded-none bg-foreground-100 dark:bg-background-800",
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
};
