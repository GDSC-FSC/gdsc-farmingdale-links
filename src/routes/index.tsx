import { ChevronLeft } from "lucide-react";
import React from "react";
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
	useNavigate,
} from "react-router-dom";
import { Component as App } from "../app/App";
import Fallback from "../components/dom/Fallback";
import { NotFound } from "../components/dom/index";
import Loading from "../components/dom/loading";
import { BaseLayout, MainLayout } from "../components/layouts/index";
import { SearchButton } from "../components/search";
import { Nav } from "../components/templates";
import { Button } from "../components/ui/button";
import { StoreProvider } from "../core/store";
import { useOnlineStatus } from "../hooks/index";
import Providers from "../providers/Providers";
import { Component as Accessibility } from "./accessibility";
import { Component as Login } from "./auth/login";
import { Component as Contact } from "./contact";
import { Component as Cookies } from "./cookies";
import { Component as Privacy } from "./privacy";
import { Component as Terms } from "./terms";
export const LegalNav = () => {
	const navigate = useNavigate();
	return (
		<React.Fragment>
			<Nav
				className={`h-50 w-full flex justify-around items-center bg-gradient-to-b from-black/40 to-transparent sticky top-0 z-50 transition-all duration-300 ease-in-out bg-transparent rounded-none shadow-none py-4  `}
			>
				<Button
					className={`w-20 flex flex-row items-center justify-center pr-2 `}
					size={`icon`}
					onClick={() => {
						navigate(-1);
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					<ChevronLeft /> Go back
				</Button>
				<SearchButton />
			</Nav>
		</React.Fragment>
	);
};

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />} loader={() => <Loading />}>
				<Route index element={<App />} />
				<Route path="privacy" element={<Privacy />} />
				<Route path="terms" element={<Terms />} />
				<Route path="accessibility" element={<Accessibility />} />
				<Route path="cookies" element={<Cookies />} />
				<Route path="contact" element={<Contact />} />
			</Route>
			<Route
				path="auth"
				element={<BaseLayout />}
				caseSensitive={false}
				loader={() => <Loading />}
			>
				<Route index element={<Navigate to="/auth" replace />} />
				<Route path="login" element={<Login />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export const RootLayout: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const isOnline = useOnlineStatus();
	return (
		<Providers>
			<StoreProvider>
				{isOnline ? children : <Fallback />}
				{/* {children} */}
			</StoreProvider>
		</Providers>
	);
};

export function AppRouter(): JSX.Element {
	return (
		<Router>
			<RootLayout>
				<AppRoutes />
			</RootLayout>
		</Router>
	);
}
