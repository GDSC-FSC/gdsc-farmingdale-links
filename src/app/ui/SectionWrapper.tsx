import { Section } from "@/src/components/templates";
import type React from "react";

const SectionWrapper: React.FC<{
	readonly children: React.ReactNode;
}> = ({ children }) => {
	return (
		<Section
			className={`
          w-full flex flex-row items-center justify-between h-14 mt-[0.2rem] rounded-lg shadow-md transition-all ease-in-out duration-[85ms] hover:bg-white/70 aria-selected:bg-black/20 bg-white/90 relative
        `}
			onMouseOver={(e) => {
				e.preventDefault();
				e.currentTarget.style.scale = ".98";
			}}
			onMouseOut={(e) => {
				e.preventDefault();
				e.currentTarget.style.scale = "1";
			}}
		>
			{children}
		</Section>
	);
};

export default SectionWrapper;
