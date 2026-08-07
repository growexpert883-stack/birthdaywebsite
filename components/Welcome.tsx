"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <motion.div
        initial={{
          opacity:0,
          scale:0.8
        }}
        animate={{
          opacity:1,
          scale:1
        }}
        transition={{
          duration:1
        }}
        className="text-center max-w-3xl"
      >

        <p className="text-pink-300 tracking-[8px] uppercase">
          Finally Unlocked
        </p>


        <h1 className="text-6xl md:text-7xl font-bold mt-6">
          Welcome ❤️
        </h1>


        <h2 className="text-4xl mt-5 text-pink-400 font-semibold">
          My Dearest Minal
        </h2>


        <p className="mt-8 text-gray-300 text-xl">
          I created this little world just for you.
          <br />
          A place filled with love, memories and a special surprise.
        </p>


      </motion.div>

    </section>
  );
}