import React, { useEffect, useRef, useState } from 'react';
import { blurHashToDataURL } from '@/src/utils/bluredHash';
import { images } from '@/src/constants/images';
import { Picture } from '@/src/components/templates';

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const timer = setTimeout(() => setCurrentIndex(nextIndex), 3000 * 10);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const currentImage = images[currentIndex];

    const dataURL = blurHashToDataURL(currentImage.blur_hash);

    if (dataURL && imageRef.current) {
      imageRef.current.style.transition = 'opacity 1s ease-out';
      imageRef.current.style.opacity = '0';

      imageRef.current.src = dataURL;

      imageRef.current.onload = () => {
        if (imageRef.current) {
          imageRef.current.src = currentImage.urls.full;
          imageRef.current.style.opacity = '1';
        }
      };
    }
  }, [currentIndex]);

  return (
    <>
      <Picture
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        {/* Add a fallback source in case the browser doesn't support the Picture element */}
        <img
          src={images[currentIndex].urls.full}
          alt={images[currentIndex].alt_description}
          style={{ display: 'none' }}
        />
        <source srcSet={images[currentIndex].urls.raw} />
        <img
          ref={imageRef}
          alt={images[currentIndex].alt_description}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Picture>
    </>
  );
};
