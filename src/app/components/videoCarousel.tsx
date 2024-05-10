import { videos } from "@/src/constants/videos";
import { useEffect, useRef, useState } from "react";

export const VideoCarousel = () => {
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const playerRef = useRef<HTMLVideoElement | null>(null);

	const handleOnEnded = () => {
		setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
	};

	useEffect(() => {
		if (playerRef.current) {
			playerRef.current.play();
		}
	}, [currentVideoIndex]);

	return (
		<>
			{videos.map((video, index) => (
				<video
					key={index}
					controls={false}
					autoPlay={index === currentVideoIndex}
					muted
					onEnded={handleOnEnded}
					ref={index === currentVideoIndex ? playerRef : null}
					style={{
						width: "100dvw",
						display: index === currentVideoIndex ? "block" : "none",
						height: "100dvh",
						objectFit: "cover",
						position: "fixed",
						top: 0,
					}}
					poster={video.image}
					preload="auto"
				>
					<source src={video.link} type={video.file_type} />
				</video>
			))}
		</>
	);
};
