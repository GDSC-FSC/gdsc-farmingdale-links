import { appName, appDescription, appOg, appOrigin } from "@/src/constants/app"
interface MetadataProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export const constructMetadata = ({ title, description, image, url }: MetadataProps) => {
  return (
    <>
      <head>
        <title>{title ? `${appName} - ${title}` : appName}</title>
        <meta name="description" content={description ?? appDescription} />
        <meta property="og:title" content={title ?? appName} />
        <meta property="og:description" content={description ?? appDescription} />
        <meta property="og:image" content={image ?? appOg.toString()} />
        <meta property="og:url" content={url ?? appOrigin} />

        <meta name="twitter:image" content={image ?? appOg.toString()} />
      </head>
    </>
  )
}
