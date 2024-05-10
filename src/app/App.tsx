import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCarousel } from "../components/providers";
import ContentCard from "./components/ContentCard";
import { ImageCarousel, VideoCarousel } from "./components/index";
const queryClient = new QueryClient();

export const Component = function App() {
	const { mediaType } = useCarousel();
	return (
		<QueryClientProvider client={queryClient}>
			<ContentCard />
			{mediaType === "image" ? <ImageCarousel /> : <VideoCarousel />}
		</QueryClientProvider>
	);
};
