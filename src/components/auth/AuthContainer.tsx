import type React from "react";

import { Card } from "../custom";
export const AuthContainer = ({
	title,
	children,
}: { title: string } & Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<Card
			className={
				"z-50 w-fit flex flex-col justify-between items-center bg-slate-400/10 select-none px-2 py-4 gap-4"
			}
		>
			<h1 className={"text-2xl font-bold text-white"}>{title}</h1>
			{children}
		</Card>
	);
};
