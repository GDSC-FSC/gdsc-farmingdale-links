import { UserAvatar } from "@/src/components/auth";
import { CustomPopover } from "@/src/components/custom/index";
import { Language } from "@/src/components/custom/index";
import { Icons } from "@/src/components/icons/icons";
import { ModeToggle } from "@/src/components/providers/theme/index";
import { SearchButton } from "@/src/components/search";
import { PrimitiveDiv as Div, Nav } from "@/src/components/templates/index";
import { useCurrentUser } from "@/src/core/auth";
import React from "react";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = function NavBar() {
	const user = useCurrentUser();
	return (
		<Nav
			className={`h-50 w-full flex justify-around items-center bg-gradient-to-b from-black/40 to-transparent sticky top-0 z-50 transition-all duration-300 ease-in-out bg-transparent rounded-none shadow-none py-4 px-8`}
		>
			<Div className="flex items-center gap-x-4 justify-between w-full">
				<Div
					className="flex items-center gap-2 justify-center cursor-pointer"
					onClick={() => {
						window.location.href = "/";
					}}
				>
					<Icons.logo size={`10`} />
					<p
						className={`
              text-xl font-bold text-white
            `}
					>
						GDSC Farmingdale
					</p>
				</Div>
			</Div>
			<Div className="ml-auto items-center gap-x-2 hidden md:flex">
				<NavFeatures />
				{user?.displayName !== "" ? (
					<CustomPopover>
						<>
							<UserAvatar />
						</>
					</CustomPopover>
				) : null}
			</Div>
			<MobileSidebar />
		</Nav>
	);
};

const NavFeatures = () => {
	const Features = [
		{
			component: <SearchButton />,
		},
		{
			component: <Language />,
		},
		{
			component: <ModeToggle />,
		},
	];
	return (
		<>
			{Features.map((feature, i) => (
				<React.Fragment key={i}>{feature.component}</React.Fragment>
			))}
		</>
	);
};
