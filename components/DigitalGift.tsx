"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DigitalGift() {
  const [opened, setOpened] = useState(false);

  const hearts = Array.from({ length: 18 });

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-28 overflow-hidden">

      {/* Falling Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-110vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 7,
              delay: i * 0.35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-red-500 text-xl md:text-2xl"
            style={{
              left: `${(i * 23 + 5) % 100}%`,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-500/[0.04] blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center">

        {!opened ? (
          <div className="animate-[fadeIn_0.8s_ease-out]">

            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/40 mb-5">
              Ek aur cheez hai tumhare liye...
            </p>

            <h2 className="text-4xl md:text-6xl font-serif text-white">
              Tumhara Gift 🎁❤️
            </h2>

            <p className="mt-5 text-white/60">
              Abhi se dekhne ki koshish mat karna 😂
            </p>

            {/* CLOSED GIFT */}
            <button
              onClick={() => setOpened(true)}
              aria-label="Open your gift"
              className="relative mx-auto mt-16 block w-52 h-52 transition-transform duration-500 hover:scale-105 active:scale-95"
            >

              {/* Glow */}
              <div className="absolute inset-3 rounded-full bg-pink-500/20 blur-3xl" />

              {/* Box */}
              <div className="absolute top-24 left-8 right-8 bottom-5 rounded-xl border-2 border-pink-300/60 bg-gradient-to-br from-pink-400/70 via-rose-400/60 to-red-400/70 shadow-xl" />

              {/* Vertical Ribbon */}
              <div className="absolute top-24 bottom-5 left-1/2 -translate-x-1/2 w-8 bg-white/25 border-x border-white/40" />

              {/* Lid */}
              <div className="absolute top-12 left-3 right-3 h-14 rounded-xl border-2 border-pink-300/60 bg-gradient-to-r from-rose-400/80 via-pink-400/80 to-red-400/80 shadow-lg" />

              {/* Horizontal Ribbon */}
              <div className="absolute top-12 left-3 right-3 h-5 bg-white/20 border-y border-white/40" />

              {/* Bow */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2">

                <div className="absolute -left-9 top-2 w-12 h-8 border-2 border-pink-300/70 bg-rose-400/80 rounded-full rotate-[-25deg]" />

                <div className="absolute left-[-3px] top-2 w-12 h-8 border-2 border-pink-300/70 bg-rose-400/80 rounded-full rotate-[25deg]" />

                <div className="relative w-6 h-6 rounded-full border-2 border-pink-300/70 bg-pink-500" />

              </div>

            </button>

            <p className="mt-10 text-xs text-white/30">
              Open it 🎁
            </p>

          </div>
        ) : (
          <div className="animate-[fadeIn_1s_ease-out]">

            {/* OPEN GIFT */}
            <div className="relative mx-auto w-52 h-40 mb-14">

              {/* Box */}
              <div className="absolute left-8 right-8 bottom-0 h-28 rounded-xl border-2 border-pink-300/60 bg-gradient-to-br from-pink-400/70 via-rose-400/60 to-red-400/70 shadow-xl" />

              {/* Vertical Ribbon */}
              <div className="absolute top-12 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-white/20 border-x border-white/40" />

              {/* Open Lid */}
              <div className="absolute left-3 right-3 top-2 h-14 rounded-xl border-2 border-pink-300/60 bg-gradient-to-r from-rose-400/80 via-pink-400/80 to-red-400/80 shadow-lg rotate-[-8deg] -translate-y-10" />

            </div>

            <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-6">
              For You ❤️
            </p>

            <h2 className="text-3xl md:text-5xl font-serif">
              Ye tumhare liye hai. 🥹
            </h2>

            <div className="max-w-xl mx-auto mt-8 space-y-5">

              <p className="text-lg leading-relaxed text-white/75">
                Socha tha tumhein birthday pe kya doon...
              </p>

              <p className="text-lg leading-relaxed text-white/75">
                Phir laga jo cheez main dena chahta hu,
                wo kisi box mein aa hi nahi sakti. 😂
              </p>

              <p className="text-xl md:text-2xl font-serif">
                Isliye ye choti si cheez bana di... sirf tumhare liye. ❤️
              </p>

              <p className="text-lg leading-relaxed text-white/70">
                Shayad ye koi mehnga gift nahi hai,
                lekin ismein mera bohot saara time aur pyaar hai.
              </p>

              <p className="text-sm text-white/50 pt-4">
                Happy Birthday, Meri Jaan. ❤️
              </p>

            </div>

          </div>
        )}

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
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