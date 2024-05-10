import { type ElementType, Fragment } from "react";

import type { Props } from "@/src/types/frontend/custom-component";
import { CustomImage as Image } from "./image/Image";
import { Video } from "./video/Video";

export const Media: React.FC<Props> = (props) => {
	const { className, resource, htmlElement = "div" } = props;

	const isVideo =
		typeof resource !== "string" && resource?.mimeType?.includes("video");
	const Tag = (htmlElement as ElementType) || Fragment;

	return (
		<Tag
			{...(htmlElement !== null
				? {
						className,
					}
				: {})}
		>
			{isVideo ? <Video {...props} /> : <Image {...props} />}
		</Tag>
	);
};
