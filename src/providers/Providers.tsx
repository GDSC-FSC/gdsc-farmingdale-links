import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import type React from "react";
import {
	CarouselProvider,
	ContextMenuProvider,
	CookieConsent,
	Events,
	ThemeProvider,
} from "../components/providers/index";
import LazyImageWrapper from "../components/wrappers/LazyImageWrapper";
const Providers: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<NextUIProvider>
			<ThemeProvider defaultTheme={`dark`} storageKey="vite-ui-theme">
				<CookieConsent />
				<AnimatePresence>
					<LazyImageWrapper>
						<Events>
							<CarouselProvider>
								<ContextMenuProvider>{children}</ContextMenuProvider>
							</CarouselProvider>
						</Events>
					</LazyImageWrapper>
				</AnimatePresence>
			</ThemeProvider>
		</NextUIProvider>
	);
};
export default Providers;
