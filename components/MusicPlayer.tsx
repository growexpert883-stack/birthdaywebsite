"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);


  const toggleMusic = async () => {

    if (!audioRef.current) return;


    try {

      if (playing) {

        audioRef.current.pause();
        setPlaying(false);

      } else {

        await audioRef.current.play();
        setPlaying(true);

      }

    } catch (error) {

      console.log("Audio Error:", error);

    }

  };


  return (

    <>
      <audio
        ref={audioRef}
        src="/music/song.mp3"
        loop
        preload="auto"
      />


      <motion.button

        whileHover={{
          scale:1.1
        }}

        whileTap={{
          scale:0.9
        }}

        onClick={toggleMusic}

        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-pink-500 text-2xl shadow-xl flex items-center justify-center"

      >

        {playing ? "⏸️" : "🎵"}

      </motion.button>

    </>

  );
}