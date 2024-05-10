import { appDescription, appName, appOg, appOrigin } from "@/src/constants/app";
import type React from "react";
interface MetadataProps {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
}

export const ConstructMetadata: React.FC<MetadataProps> = ({
	title,
	description,
	image,
	url,
}) => {
	return (
		<>
			<head>
				<title>{title ? `${appName} - ${title}` : appName}</title>
				<meta name="description" content={description ?? appDescription} />
				<meta property="og:title" content={title ?? appName} />
				<meta
					property="og:description"
					content={description ?? appDescription}
				/>
				<meta property="og:image" content={image ?? appOg.toString()} />
				<meta property="og:url" content={url ?? appOrigin} />

				<meta name="twitter:image" content={image ?? appOg.toString()} />
			</head>
		</>
	);
};
