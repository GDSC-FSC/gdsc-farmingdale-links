import type { ElementType, Ref } from 'react'


export interface Props {
  src?: string | StaticImageData
  alt?: string
  resource?: string | Media
  size?: string
  fill?: boolean
  className?: string
  imgClassName?: string
  videoClassName?: string
  htmlElement?: ElementType | null
  onClick?: () => void
  onLoad?: () => void
  ref?: Ref<null | HTMLImageElement | HTMLVideoElement>
  fetchpriority?: 'high' | 'low' | 'auto'
}

export interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
}

interface Media {
  id: string;
  alt: string;
  caption?: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}

export interface CustomButtonProps {
  label?: string
  appearance?: 'default' | 'primary' | 'secondary' | 'none'
  el?: 'button' | 'link' | 'a'
  onClick?: () => void
  href?: string
  newTab?: boolean
  className?: string
  type?: 'submit' | 'button'
  disabled?: boolean
  children?: React.ReactNode
  share?: boolean;
}
