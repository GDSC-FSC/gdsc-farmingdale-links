import type { Props as MediaProps } from "@/src/types/frontend/custom-component";
import type React from "react";
import { useEffect, useRef, useState } from "react";

export const Video: React.FC<MediaProps> = (props) => {
	const { videoClassName, resource, onClick } = props;

	const videoRef = useRef<HTMLVideoElement>(null);
	// Mix this with existing
	const [, setShowFallback] = useState<boolean>();

	useEffect(() => {
		const { current: video } = videoRef;
		if (video) {
			video.addEventListener("suspend", () => {
				setShowFallback(true);
				console.warn("Video was suspended, rendering fallback image.");
			});
		}
	}, []);

	if (resource && typeof resource !== "string") {
		const { filename } = resource;

		return (
			<video
				playsInline
				autoPlay
				muted
				loop
				controls={false}
				className={[
					`
          max-w-full w-full bg-foreground-100`,
					videoClassName,
				]
					.filter(Boolean)
					.join(" ")}
				onClick={onClick}
				ref={videoRef}
			>
				<source src={`${import.meta.url}/assets/videos/${filename}`} />
			</video>
		);
	}

	return null;
};
