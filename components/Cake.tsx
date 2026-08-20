"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const hearts = Array.from({ length: 18 });

export default function Cake() {
  const [wished, setWished] = useState(false);

  return (
    <section className="relative min-h-screen bg-white text-black flex items-center justify-center px-6 py-28 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-red-500/10 blur-3xl" />
      </div>

      {/* Falling Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "100vh",
              opacity: 0,
            }}
            animate={{
              y: "-20vh",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + (i % 4),
              delay: i * 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-red-500 text-xl select-none"
            style={{
              left: `${(i * 7 + 3) % 100}%`,
              fontSize: `${16 + (i % 4) * 5}px`,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-3xl text-center">

        {!wished ? (
          <div className="animate-[fadeIn_0.8s_ease-out]">

            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-black/40 mb-5">
              One last birthday tradition...
            </p>

            <h2 className="text-4xl md:text-6xl font-serif">
              Make a Wish 🎂
            </h2>

            <p className="mt-5 text-black/55">
              Close your eyes, make a wish, and blow out the candles. ❤️
            </p>

            {/* Cake */}
            <div className="relative w-80 h-80 mx-auto mt-12">

              {/* Flames */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-12 z-20">

                {[1, 2, 3].map((item) => (
                  <span key={item} className="relative block w-5 h-8">
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-7 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.9)] animate-pulse" />
                  </span>
                ))}

              </div>

              {/* Candles */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-12 z-10">

                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-4 h-16 rounded-full bg-pink-300 border-2 border-pink-400 shadow-lg"
                  />
                ))}

              </div>

              {/* Cream */}
              <div className="absolute bottom-[125px] left-8 right-8 h-20 rounded-[2rem] bg-pink-100 border-4 border-pink-300 shadow-[0_10px_35px_rgba(236,72,153,0.3)]">

                <div className="absolute left-5 bottom-4 text-pink-400">
                  • • •
                </div>

                <div className="absolute right-5 top-4 text-pink-400">
                  • • •
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-400 text-xl">
                  ♥
                </div>

              </div>

              {/* Cake Body */}
              <div className="absolute bottom-8 left-4 right-4 h-32 rounded-[1.5rem] bg-pink-400 border-4 border-pink-500 shadow-[0_15px_45px_rgba(236,72,153,0.35)]">

                <div className="absolute top-8 left-0 right-0 h-4 bg-pink-100/80" />

                <div className="absolute top-[70px] left-0 right-0 h-3 bg-pink-300/80" />

                <div className="absolute bottom-4 left-8 text-white text-lg">
                  ♥
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
                  ♥
                </div>

                <div className="absolute bottom-4 right-8 text-white text-lg">
                  ♥
                </div>

              </div>

              {/* Plate */}
              <div className="absolute bottom-1 left-0 right-0 h-7 rounded-full bg-pink-200 border-4 border-pink-300 shadow-xl" />

            </div>

            {/* Button */}
            <button
              onClick={() => setWished(true)}
              className="mt-4 px-9 py-4 rounded-full bg-black text-white font-medium shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-800 active:scale-95"
            >
              Make My Wish ❤️
            </button>

            <p className="mt-5 text-xs text-black/30">
              One wish. Make it count. ✨
            </p>

          </div>
        ) : (
          <div className="animate-[fadeIn_1s_ease-out]">

            <div className="text-6xl mb-8 animate-pulse">
              ✨
            </div>

            <p className="text-xs uppercase tracking-[0.35em] text-black/40 mb-6">
              Wish made
            </p>

            <h2 className="text-4xl md:text-6xl font-serif">
              I hope it comes true. ❤️
            </h2>

            <div className="max-w-xl mx-auto mt-8 space-y-6">

              <p className="text-lg md:text-xl leading-relaxed text-black/65">
                Whatever you wished for tonight, I genuinely hope you get it.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-black/65">
                And if I could add one little wish of my own...
              </p>

              <p className="text-2xl md:text-3xl font-serif leading-relaxed">
                I would wish for many more birthdays with you. ❤️
              </p>

              <p className="text-sm text-black/40 pt-4">
                Happy Birthday, Minal Meri Jan. 🎂❤️
              </p>

            </div>

            <div className="mt-10 text-4xl">
              🎂 ❤️ ✨
            </div>

          </div>
        )}

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}