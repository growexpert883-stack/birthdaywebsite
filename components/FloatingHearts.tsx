"use client";

import { motion } from "framer-motion";

export default function FloatingHearts() {

  const hearts = Array.from({ length: 25 });

  return (
    <>
      {hearts.map((_, index) => (

        <motion.div

          key={index}

          initial={{
            y: "100vh",
            opacity: 0
          }}

          animate={{
            y: "-10vh",
            opacity: [0, 1, 0]
          }}

          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}

          className="fixed z-0 text-pink-400 text-2xl pointer-events-none"

          style={{
            left: `${Math.random() * 100}%`
          }}

        >
          ❤️

        </motion.div>

      ))}

    </>
  );
}