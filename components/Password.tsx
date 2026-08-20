"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Password({
  unlock,
}: {
  unlock: () => void;
}) {

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkPassword = () => {

    if (password === "minallovesmba") {
      unlock();
    } else {
      setError(
        "One more try, my sweetheart. Your Surprise is just one click away ❤️"
      );
    }

  };


  return (

    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />


      {/* Glow */}
      <div className="absolute w-[450px] h-[450px] bg-pink-500/20 rounded-full blur-3xl" />


      {/* Card */}
      <motion.div

        initial={{
          opacity:0,
          scale:0.8,
          y:40
        }}

        animate={{
          opacity:1,
          scale:1,
          y:0
        }}

        transition={{
          duration:0.8
        }}

        className="relative z-10 max-w-md w-full rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-10 text-center shadow-2xl"
      >


        {/* Lock Animation */}
        <motion.div

          animate={{
            rotate:[0,10,-10,0]
          }}

          transition={{
            duration:2,
            repeat:Infinity
          }}

          className="text-6xl"
        >
          🔒
        </motion.div>


        <h1 className="text-4xl font-bold mt-6 text-pink-400">
          Reserved for someone very special
        </h1>


        <p className="text-gray-300 mt-5 text-lg">
          Only the one who holds my heart can unlock this ❤️
        </p>


        <input

          type="password"

          placeholder="Enter Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          className="mt-8 w-full rounded-full bg-black/30 border border-white/20 px-5 py-3 outline-none text-center placeholder-gray-400"

        />


        <motion.button

          whileHover={{
            scale:1.05
          }}

          whileTap={{
            scale:0.95
          }}

          onClick={checkPassword}

          className="mt-5 w-full rounded-full bg-pink-500 py-3 font-semibold hover:bg-pink-600 transition"

        >
          Unlock ✨

        </motion.button>


        {error && (

          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            className="text-red-400 mt-5"

          >
            {error}

          </motion.p>

        )}


      </motion.div>


    </section>

  );
}