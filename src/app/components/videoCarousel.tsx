import { useState, useRef, useEffect } from 'react';
import { videos } from '@/src/constants/videos';

function VideoCarousel() {
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
            borderRadius: "15px",
            width: "100dvw",
            display: index === currentVideoIndex ? 'block' : 'none',
            height: "100dvh"
          }}
          poster={video.image}
          preload="auto"
        >
          <source src={video.link} type={video.file_type} />
        </video>
      ))}
    </>
  );
}

export default VideoCarousel;
