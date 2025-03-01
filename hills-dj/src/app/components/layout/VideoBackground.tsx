'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  videoUrl: string;
}

const VideoBackground = ({ videoUrl }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = false;
          await videoRef.current.play();
          setIsPlaying(true);
          setIsMuted(false);
        } catch (error) {
          console.log("Unmuted autoplay failed, trying muted:", error);
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            try {
              await videoRef.current.play();
              setIsPlaying(true);
            } catch (mutedError) {
              console.log("Even muted autoplay failed:", mutedError);
            }
          }
        }
      }
    };

    playVideo();
  }, []);

  const toggleMute = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
        
        if (!videoRef.current.muted && !isPlaying) {
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Error toggling mute:", error);
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        muted={isMuted}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Sound control button */}
      <motion.button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-50 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMuted ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </motion.button>

      {/* Initial play button (shown if video isn't playing) */}
      {!isPlaying && (
        <motion.button
          onClick={toggleMute}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white/20 p-6 rounded-full hover:bg-white/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.button>
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />
    </div>
  );
};

export default VideoBackground; 