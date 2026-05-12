"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { getVideoId } from "@/lib/utils";

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, thumbnailUrl, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoId = getVideoId(videoUrl);

  return (
    <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden group">
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-surface)]">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center mb-4">
              <Play className="w-8 h-8 text-[var(--color-accent)]" fill="currentColor" />
            </div>
            <p className="text-[var(--color-text-secondary)]">Video unavailable</p>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" fill="currentColor" />
              ) : (
                <Play className="w-5 h-5 text-white" fill="currentColor" />
              )}
            </button>

            <button
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
            <Maximize className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}