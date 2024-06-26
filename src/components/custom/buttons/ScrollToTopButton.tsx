import { Button } from "@/src/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
		};
		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		isVisible &&
			window.scrollTo({
				top: 0,
				behavior: "auto",
			});
	};

	return (
		<Button
			className={`fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-200 z-50  ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
			onClick={scrollToTop}
		>
			<ChevronUp />
		</Button>
	);
};
