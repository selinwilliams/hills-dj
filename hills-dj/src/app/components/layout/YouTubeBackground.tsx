'use client';

import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

interface YouTubeBackgroundProps {
  videoId: string;
}

const YouTubeBackground = ({ videoId }: YouTubeBackgroundProps) => {
  const [isReady, setIsReady] = useState(false);

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
      modestbranding: 1,
      playsinline: 1,
      enablejsapi: 1,
    },
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div className={`relative w-full h-full ${isReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <YouTube
          videoId={videoId}
          opts={opts}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-[100vw] min-h-[100vh]"
          onReady={(event) => {
            event.target.playVideo();
            setIsReady(true);
          }}
          onEnd={(event) => {
            event.target.playVideo();
          }}
          onStateChange={(event) => {
            if (event.data === YouTube.PlayerState.ENDED) {
              event.target.playVideo();
            }
          }}
        />
      </div>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />
    </div>
  );
};

export default YouTubeBackground; 