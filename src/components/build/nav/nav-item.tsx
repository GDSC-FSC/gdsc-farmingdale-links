import { CustomImage as Image } from "@/src/components/custom";
import { Div } from "@/src/components/templates/index";
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Skeleton } from "@/src/components/ui/skeleton";
import { useCurrentUser } from "@/src/core/auth";
import { cn } from "@/src/lib/utils";
import { NavItems } from "./NavItems";

export const NavItem = ({ isExpanded, isActive, onExpand }: NavItemProps) => {
	const user = useCurrentUser();
	return (
		<AccordionItem value={user?.uid || ""} className="border-none">
			<AccordionTrigger
				onClick={() => onExpand(user?.uid || "")}
				className={cn(
					"flex items-center gap-x-2 p-1.5 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline bg-foreground-100 dark:bg-background-800",
					isActive && !isExpanded && "bg-sky-500/10 text-sky-700",
				)}
			>
				<Div className="flex items-center gap-x-2">
					<Div className="w-7 h-7 relative">
						<Image
							fill
							src={user?.photoURL || ""}
							alt="User avatar"
							className="rounded-sm object-cover"
						/>
					</Div>
					<span className="font-medium text-sm">
						{user?.displayName || "User"}
					</span>
				</Div>
			</AccordionTrigger>
			<AccordionContent className="pt-1 text-neutral-700">
				<NavItems />
			</AccordionContent>
		</AccordionItem>
	);
};

NavItem.Skeleton = function SkeletonNavItem() {
	return (
		<Div className="flex items-center gap-x-2">
			<Div className="w-10 h-10 relative shrink-0">
				<Skeleton className="h-full w-full absolute" />
			</Div>
			<Skeleton className="h-10 w-full" />
		</Div>
	);
};
