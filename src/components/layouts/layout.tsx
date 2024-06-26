/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CenterLayout, ContainerWrapper } from ".";
import { LegalNav } from "../../routes/index";
import { BackgroundGradientAnimation } from "../animation/BackgroundGradientAnimation";
import { FooterBar, Navbar } from "../build";
import { ScrollToTopButton } from "../custom";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
export function MainLayout(): JSX.Element {
	const location = useLocation();
	const isBasePath = location.pathname === "/";

	return (
		<Fragment>
			{isBasePath ? <Navbar /> : <LegalNav />}
			<ContainerWrapper
				Element={`main`}
				className={`h-full w-screen flex items-center justify-center flex-col overflow-y-hidden z-40 ${
					isBasePath ? "h-screen" : "h-screen relative "
				}`}
			>
				{isBasePath ? (
					<Suspense>
						<Outlet />
					</Suspense>
				) : (
					<>
						{location.pathname === "/contact" ? (
							<>
								<Suspense>
									<Outlet />
								</Suspense>
							</>
						) : (
							<ScrollArea
								className={`px-10 w-screen gap-2 flex flex-col pb-10`}
								style={{
									height: "100dvh",
									width: "100%",
								}}
							>
								<Suspense>
									<Outlet />
								</Suspense>
							</ScrollArea>
						)}
						<ScrollToTopButton />
					</>
				)}
			</ContainerWrapper>
		</Fragment>
	);
}

export function BaseLayout(): JSX.Element {
	const location = useLocation();
	return (
		<Fragment>
			<SemanticLayout>
				<CenterLayout
					Element={`main`}
					className={`h-screen w-screen flex items-center justify-center ${
						location.pathname === "/"
							? " overflow-y-hidden "
							: "overflow-y-hidden"
					}`}
				>
					<BackgroundGradientAnimation>
						<Suspense>
							<Outlet />
						</Suspense>
					</BackgroundGradientAnimation>
				</CenterLayout>
			</SemanticLayout>
		</Fragment>
	);
}

const SemanticLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const location = useLocation();
	const isBasePath = location.pathname === "/";
	const isLoginPage = location.pathname.startsWith("/auth/login");
	return (
		<>
			<Navbar />
			{children}
			{isLoginPage ? (
				<FooterBar
					footerClass={`fixed w-screen`}
					className={`w-full `}
					isLegal={isLoginPage}
				/>
			) : null}
		</>
	);
};
