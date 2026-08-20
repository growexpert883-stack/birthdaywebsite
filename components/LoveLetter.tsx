"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const letterText = `
My Love Dear Minal ❤️,

I have been thinking about how to write this for a long time, but the truth is… no words can ever fully explain what you mean to me.

When I look back at our journey, it still feels amazing how everything started with just one simple message on 30 December 2024 at 9:13 PM. At that moment, I had no idea that a small conversation would slowly become one of the most beautiful parts of my life. I never knew that someone I met through a simple message would become someone whose smile could make my entire day better.

From our first conversation to our first meeting, and from those little moments to the memories we created together, every single thing holds a special place in my heart. It was never about expensive places, long hours, or perfect moments. The beauty was always in the fact that it was with you.

I still remember our meetings, the laughs, the little arguments, and even the moments when you got angry with me. 😅 Somehow, even those moments became special because they were a part of our story. Your smile, your happiness, your little habits, and the way you make ordinary moments feel special are things I will always cherish.

You came into my life quietly, but your presence created a beautiful difference. You became someone I look forward to talking to, someone whose happiness matters to me, and someone I genuinely want to see smiling.

On your birthday, I don't just want to wish you a happy birthday. I want to thank you. Thank you for every conversation, every memory, every smile, and every moment that made my life a little brighter. Thank you for being the person who unknowingly gave me so many reasons to smile.

I hope life gives you everything your heart wishes for. I hope you always stay happy, keep shining, and never forget how special you are.

I don't know what the future has written for us, but I know that meeting you will always remain one of the most beautiful chapters of my life. And no matter where life takes us, I will always be grateful for the memories we created and the happiness you brought into my world.

This little website is just a small attempt to show you how much these moments mean to me. Every picture, every word, and every memory here carries a small piece of my feelings for you.

Happy Birthday, my favorite person. ❤️🎂

Always smile, because your smile is one of the most beautiful things in my world.

With all my love ❤️
`;

export default function LoveLetter() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!open) return;

    let index = 0;

    const typing = setInterval(() => {
      setText(letterText.slice(0, index));
      index++;

      if (index > letterText.length) {
        clearInterval(typing);
      }
    }, 35);

    return () => clearInterval(typing);
  }, [open]);

  const hearts = Array.from({ length: 18 });

  return (
    <section className="relative min-h-screen bg-white text-black flex items-center justify-center px-6 py-24 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-pink-100/60 blur-3xl" />
      </div>

      {/* Falling / Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {hearts.map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "110vh",
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              y: "-15vh",
              opacity: [0, 0.5, 0.35, 0],
              rotate: [0, 20, -20, 40],
            }}
            transition={{
              duration: 8 + (i % 5),
              delay: i * 0.45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-pink-300"
            style={{
              left: `${(i * 7 + 3) % 97}%`,
              fontSize: `${16 + (i % 4) * 5}px`,
            }}
          >
            ❤️
          </motion.div>
        ))}

      </div>

      {!open ? (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >

          {/* Envelope */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            onClick={() => setOpen(true)}
            className="text-9xl cursor-pointer select-none"
          >
            💌
          </motion.div>

          <h2 className="mt-8 text-4xl md:text-5xl font-serif text-pink-500">
            A Letter For You ❤️
          </h2>

          <p className="mt-5 text-gray-500">
            Tap the envelope to open your surprise ✨
          </p>

          <p className="mt-3 text-xs text-gray-400">
            There are some things I wanted to say...
          </p>

        </motion.div>
      ) : (
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-10 max-w-3xl w-full bg-[#fffaf5] border border-pink-100 text-black rounded-3xl p-8 md:p-12 shadow-[0_20px_70px_rgba(236,72,153,0.15)]"
        >

          <motion.div
            initial={{
              rotateX: 90,
            }}
            animate={{
              rotateX: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-center text-4xl mb-8"
          >
            💌
          </motion.div>

          <h2 className="text-center text-4xl md:text-5xl font-serif text-pink-500 mb-8">
            For Minal ❤️
          </h2>

          <div className="w-20 h-px bg-pink-200 mx-auto mb-8" />

          <p className="whitespace-pre-line text-base md:text-lg leading-[1.9] text-gray-700">
            {text}
          </p>

          {text.length >= letterText.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center mt-10 text-2xl"
            >
              ❤️
            </motion.div>
          )}

        </motion.div>
      )}

      <style jsx>{`
        @keyframes softGlow {
          0%,
          100% {
            opacity: 0.3;
          }

          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}