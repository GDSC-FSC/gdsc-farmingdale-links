import React from "react";
import { AuthContainer } from "../../components/auth";
import { LoginButton, LogoutButton } from "../../components/custom";
import { CardClasses } from "../../constants/index";
import { useCurrentUser } from "../../core/auth";
import { usePageEffect } from "../../core/page";

export const Component = function Login(): JSX.Element {
	usePageEffect({ title: `Login` });
	const user = useCurrentUser();
	return (
		<AuthContainer title={`Login`}>
			<menu className={`flex flex-col gap-2`}>
				<li>
					<LoginButton
						className={`w-full  aria-selected:bg-black/20  bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 ${CardClasses}`}
						signInMethod="google.com"
					/>
				</li>
				<li>
					<LoginButton
						className={`w-full  aria-selected:bg-black/20  bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 ${CardClasses}`}
						signInMethod="anonymous"
					/>
				</li>
				{user && (
					<LogoutButton
						className={`w-full  aria-selected:bg-black/20  bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 ${CardClasses}`}
					/>
				)}
			</menu>
		</AuthContainer>
	);
};
