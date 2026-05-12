"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getVideoId } from "@/lib/utils";
import { Play, Volume2, VolumeX } from "lucide-react";

interface VideoThumbnailProps {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
}

export default function VideoThumbnail({
  thumbnailUrl,
  videoUrl,
  title,
}: VideoThumbnailProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const videoId = getVideoId(videoUrl);
  const hoverVideoUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
    : null;

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <motion.div
      ref={containerRef}
      className="relative aspect-video overflow-hidden rounded-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover transition-opacity duration-300"
        style={{ opacity: isHovered && hoverVideoUrl ? 0 : 1 }}
      />

      {hoverVideoUrl && isHovered && (
        <div className="absolute inset-0 z-10">
          <iframe
            src={hoverVideoUrl}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
      />

      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 backdrop-blur-sm flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Play className="w-6 h-6 text-[var(--color-accent)]" fill="currentColor" />
          </motion.div>
        </div>
      )}

      {isHovered && (
        <motion.button
          className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted(!isMuted);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-white" />
          ) : (
            <Volume2 className="w-4 h-4 text-white" />
          )}
        </motion.button>
      )}

      <video
        ref={videoRef}
        src={videoUrl}
        muted={isMuted}
        loop
        playsInline
        className="hidden"
      />
    </motion.div>
  );
}