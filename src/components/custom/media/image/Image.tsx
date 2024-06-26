import { useState } from "react";

import { cssVariables } from "@/src/styles/cssVariables";
import type {
	Props as MediaProps,
	StaticImageData,
} from "@/src/types/frontend/custom-component";
import { Image } from "@nextui-org/react";

const { breakpoints } = cssVariables;

export const CustomImage: React.FC<MediaProps> = (props) => {
	const {
		imgClassName,
		onClick,
		onLoad: onLoadFromProps,
		resource,
		fill,
		src: srcFromProps,
		alt: altFromProps,
		fetchpriority,
	} = props;

	const [isLoading, setIsLoading] = useState(true);

	let width: number | undefined;
	let height: number | undefined;
	let alt = altFromProps;
	let src: string | StaticImageData = srcFromProps || "";

	if (!src && resource && typeof resource !== "string") {
		const {
			width: fullWidth,
			height: fullHeight,
			filename: fullFilename,
			alt: altFromResource,
		} = resource;

		width = fullWidth;
		height = fullHeight;
		alt = altFromResource;

		const filename = fullFilename;

		src = `${import.meta.env.BASE_URL}/assets/images/${filename}`;
	}

	// NOTE: this is used by the browser to determine which image to download at different screen sizes
	const sizes = Object.entries(breakpoints)
		.map(([, value]) => `(max-width: ${value}px) ${value}px`)
		.join(", ");

	return (
		<Image
			className={[isLoading && `bg-black/[0.05]`, imgClassName]
				.filter(Boolean)
				.join(" ")}
			src={typeof src === "string" ? src : src.src}
			alt={alt || ""}
			onClick={onClick}
			onLoad={() => {
				setIsLoading(false);
				if (typeof onLoadFromProps === "function") {
					onLoadFromProps();
				}
			}}
			width={!fill ? width : undefined}
			height={!fill ? height : undefined}
			sizes={sizes}
			fetchpriority={fetchpriority}
		/>
	);
};
