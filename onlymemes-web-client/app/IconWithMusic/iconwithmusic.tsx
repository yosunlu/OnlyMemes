'use client'
import React, { useRef } from 'react';
import Image from "next/image";

function IconWithMusic() {
  // Specify the type of the ref as HTMLAudioElement or null
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Rewind to start
    }
  };

  return (
    <div>
      <Image
        src="/Yao.png"
        className="cube-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alt="Icon"
        width={30}
        height={60}
      />
      
      <audio ref={audioRef} src="RR.mp3" />
    </div>
  );
}

export default IconWithMusic;
