import { TabsTrigger } from "@/src/components/ui/tabs";
import type React from "react";

const TabsTriggers: React.FC<{
	readonly value: string;
	title: string;
}> = ({ value, title }) => {
	return (
		<>
			<TabsTrigger
				value={value}
				className={`
                  w-1/3 font-semibold
                `}
			>
				{title.toUpperCase()}
			</TabsTrigger>
		</>
	);
};

export default TabsTriggers;
