"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown({
  finished,
}: {
  finished: () => void;
}) {
  const birthday = new Date("August 13, 2026 09:00:00").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthday - now;

      if (distance <= 0) {
        clearInterval(timer);
        finished();
        return;
      }

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [birthday, finished]);

  const boxes = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[180px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: .95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-5xl rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-2xl p-10 shadow-2xl"
      >

        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl text-center"
        >
          ❤️
        </motion.div>

        <h1 className="mt-6 text-center text-5xl md:text-6xl font-bold text-white">
          A Surprise Is Waiting...
        </h1>

        <p className="mt-5 text-center text-gray-300 text-xl">
          Every second brings you closer to your special day.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

          {boxes.map((item) => (

            <motion.div
              key={item.label}
              whileHover={{
                scale: 1.06,
                y: -8,
              }}
              transition={{ duration: .3 }}
              className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 text-center shadow-xl"
            >

              <motion.h2
                key={item.value}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: .25 }}
                className="text-5xl font-bold text-pink-400"
              >
                {String(item.value).padStart(2, "0")}
              </motion.h2>

              <p className="mt-3 uppercase tracking-[4px] text-gray-400 text-sm">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

        <p className="mt-14 text-center text-gray-500 italic text-lg">
          "Some surprises are worth waiting for... ❤️"
        </p>

      </motion.div>

    </section>
  );
}