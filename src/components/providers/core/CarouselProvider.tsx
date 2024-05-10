import type React from "react";
import { type FC, createContext, useContext, useState } from "react";

export type CarouselContextValue = {
	mediaType: "image" | "video";
	setMediaType: React.Dispatch<React.SetStateAction<"image" | "video">>;
};

export const CarouselContext = createContext<CarouselContextValue | null>(null);

export const CarouselProvider: FC<{
	children: React.ReactNode;
}> = (props) => {
	const { children } = props;
	const [mediaType, setMediaType] =
		useState<CarouselContextValue["mediaType"]>("image");
	const contextValue: CarouselContextValue = {
		mediaType,
		setMediaType,
	};
	return (
		<CarouselContext.Provider value={contextValue}>
			{children}
		</CarouselContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export function useCarousel() {
	const context = useContext(CarouselContext);
	if (!context) {
		throw new Error("useCarousel must be used within a CarouselProvider");
	}
	return context;
}
