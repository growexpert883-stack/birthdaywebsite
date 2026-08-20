"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "If you were here right now...",
  "I know I'd annoy you first. 😂",
  "I'd probably tease you until you got a little angry.",
  "Then I'd look at you and start laughing... 😭",
  "And obviously, I'd have to make you smile again.",
  "But after all the teasing and laughing...",
  "I think I'd just want to sit beside you.",
  "Talk about absolutely random things...",
  "listen to you talk...",
  "and just enjoy those little moments with you.",
  "Because honestly...",
  "if you were here, I wouldn't need anything else.",
  "I'd just be happy having you right next to me. ❤️",
];

const hearts = Array.from({ length: 18 });

export default function IfYouWereHere() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 1100);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">

      {/* Background glow - SAME */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-pink-400/10 blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-52 h-52 rounded-full bg-purple-400/10 blur-3xl" />
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
            className="absolute text-red-500 select-none"
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
      <div className="relative z-10 max-w-2xl text-center">

        {/* Heading - SAME */}
        <p className="text-sm uppercase tracking-[0.3em] opacity-50 mb-6">
          Just a little thought...
        </p>

        {/* Text */}
        <div className="space-y-5">

          {lines.slice(0, visibleLines).map((line, index) => {
            const isLast = index === lines.length - 1;

            return (
              <p
                key={index}
                className={`text-xl md:text-2xl font-serif leading-relaxed animate-[fadeIn_0.7s_ease-out] ${
                  isLast
                    ? "text-2xl md:text-3xl font-medium mt-8"
                    : "opacity-90"
                }`}
              >
                {line}
              </p>
            );
          })}

        </div>

        {/* Typing indicator - SAME */}
        {visibleLines < lines.length && (
          <div className="mt-10 flex justify-center gap-1 opacity-40">
            <span className="animate-bounce">•</span>

            <span className="animate-bounce [animation-delay:150ms]">
              •
            </span>

            <span className="animate-bounce [animation-delay:300ms]">
              •
            </span>
          </div>
        )}

        {/* Ending */}
        {visibleLines >= lines.length && (
          <div className="mt-10 animate-[fadeIn_1s_ease-out]">

            <div className="text-3xl tracking-[0.4em]">
              ❤️ ❤️ ❤️
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.3em] opacity-30">
              I really wish you were here.
            </p>

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