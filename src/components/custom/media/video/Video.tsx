import React, { useEffect, useRef } from 'react'

import { Props as MediaProps } from '@/src/types/frontend/custom-component';

// TODO: use emotion instead of scss
import classes from './index.module.scss'

export const Video: React.FC<MediaProps> = props => {
  const { videoClassName, resource, onClick } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef
    if (video) {
      video.addEventListener('suspend', () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      })
    }
  }, [])

  if (resource && typeof resource !== 'string') {
    const { filename } = resource

    return (
      <video
        playsInline
        autoPlay
        muted
        loop
        controls={false}
        className={[classes.video, videoClassName].filter(Boolean).join(' ')}
        onClick={onClick}
        ref={videoRef}
      >
        <source src={`${import.meta.url}/assets/videos/${filename}`} />
      </video>
    )
  }

  return null
}
