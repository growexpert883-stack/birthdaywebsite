"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Stars from "./Stars";

export default function Hero() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");

      heart.innerHTML = "❤️";
      heart.className = "heart";

      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = 4 + Math.random() * 4 + "s";

      document
        .querySelector(".hero-section")
        ?.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 8000);
    };

    const interval = setInterval(createHeart, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-black to-purple-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-black to-purple-900"></div>

      <Stars />
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl"></div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-[90%] max-w-3xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-10 text-center shadow-2xl"
      >
        <p className="tracking-[8px] uppercase text-pink-300">
          A Special Day
        </p>

        <h1 className="mt-5 text-6xl font-bold text-white">
          Happy Birthday
        </h1>

        <h2 className="mt-4 text-4xl font-bold text-pink-400">
          ❤️ My Dearest Minal ❤️
        </h2>

        <p className="mt-8 text-lg text-gray-300">
          Every moment with you is a beautiful memory.
          <br />
          Today is all about celebrating you.
        </p>


<motion.a
  href="#story"

  whileHover={{
    scale:1.08
  }}

  whileTap={{
    scale:0.95
  }}

  className="inline-block mt-10 rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold hover:bg-pink-600 cursor-pointer"
>
  Begin Our Journey ✨
</motion.a>
      </motion.div>

    </section>
  );
}