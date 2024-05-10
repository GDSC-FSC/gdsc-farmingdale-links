import { Accordion } from "@/src/components/ui/accordion";
import { useCurrentUser } from "@/src/core/auth";
import { useLocalStorage } from "usehooks-ts";
import { NavItem } from "./nav-item";

export const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
		storageKey,
		{},
	);

	const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
		(acc: string[], key: string) => {
			if (expanded[key]) {
				acc.push(key);
			}

			return acc;
		},
		[],
	);

	const onExpand = (id: string) => {
		setExpanded((curr) => ({
			...curr,
			[id]: !expanded[id],
		}));
	};
	const user = useCurrentUser();
	return (
		<>
			<Accordion
				type="multiple"
				defaultValue={defaultAccordionValue}
				className="space-y-2"
			>
				<>
					<NavItem
						key={user?.uid}
						isActive={true}
						isExpanded={expanded[user?.uid || ""]}
						onExpand={onExpand}
					/>
				</>
			</Accordion>
		</>
	);
};
