import TicTacToe from "@/src/components/game/TicTacToe";
import { ImageCarousel, VideoCarousel } from "../../app/components/index";
import { useCarousel } from "../../components/providers";
import Providers from "../../providers/Providers";
import { CenterLayout } from "../layouts";
export default function Fallback() {
	const { mediaType } = useCarousel();
	return (
		<Providers>
			<CenterLayout
				Element={`main`}
				className={`
        h-screen w-full
      `}
			>
				<TicTacToe />
				{mediaType === "image" ? <ImageCarousel /> : <VideoCarousel />}
			</CenterLayout>
		</Providers>
	);
}
