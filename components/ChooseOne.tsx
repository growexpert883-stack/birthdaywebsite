"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const choices = [
  {
    title: "Mera Care Karna 🫶",
    reply:
      "Acha 👀 ye mujhy acha laga... main waise bhi tumhari care karna kabhi band nahi karunga ❤️",
  },
  {
    title: "Mera Tumhein Tang Karna 😂",
    reply:
      "Ye choose kiya hai? 😂 Phir baad mein ye mat kehna ke main tumhein bohot tang karta hu ❤️",
  },
  {
    title: "Meri Baatein 🥹",
    reply:
      "Haan ye maan leta hu 😂 Lekin meri faltu baatein bhi itni hi pasand hain ya sirf achi wali?",
  },
  {
    title: "Mera Pyaar ❤️",
    reply:
      "Hmm... ye answer mujhy pasand aya 🥹❤️ Ab isko change karne ka option nahi hai.",
  },
];

export default function ChooseOne() {
  const [selected, setSelected] = useState<number | null>(null);

  const hearts = Array.from({ length: 20 });

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-28 overflow-hidden">

      {/* Falling Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "110vh",
              opacity: 0,
            }}
            animate={{
              y: "-110vh",
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 7,
              delay: i * 0.3,
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

      {/* Soft Red Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-500/5 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-3xl text-center">

        {/* Small Heading */}
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/40 mb-6">
          Chalo ek baat batao...
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-serif leading-tight">
          Mujh Mein Sabse Acha
          <br />
          Kya Lagta Hai? ❤️
        </h2>

        {/* Description */}
        <p className="mt-6 text-white/50 text-sm md:text-base">
          Soch samajh k choose karna...
          <br />
          baad mein change nahi hoga 😂
        </p>

        {/* Choices */}
        <div className="grid sm:grid-cols-2 gap-5 mt-14">

          {choices.map((choice, index) => {
            const isSelected = selected === index;

            return (
              <button
                key={choice.title}
                onClick={() => setSelected(index)}
                className={`relative min-h-[90px] rounded-3xl border px-6 py-6 text-lg font-serif text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/30 hover:shadow-xl ${
                  isSelected
                    ? "scale-[1.03] bg-white/[0.08] border-red-500/60 shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                    : "bg-white/[0.03] border-white/15"
                }`}
              >
                {choice.title}

                {isSelected && (
                  <span className="absolute top-3 right-4 text-red-500">
                    ❤️
                  </span>
                )}
              </button>
            );
          })}

        </div>

        {/* Selected Answer */}
        {selected !== null && (
          <div
            key={selected}
            className="mt-12 rounded-3xl border border-white/15 bg-white/[0.04] px-7 py-8 md:px-10 md:py-10 animate-[fadeIn_0.5s_ease-out]"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-5">
              Your answer ❤️
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              {choices[selected].reply}
            </p>
          </div>
        )}

        {/* Ending */}
        {selected !== null && (
          <p className="mt-9 text-sm text-white/30">
            Bas ab jo choose kiya hai usi pe rehna 😂❤️
          </p>
        )}

      </div>

      {/* Fade Animation */}
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