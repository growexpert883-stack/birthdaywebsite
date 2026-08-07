"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);


    return () => clearTimeout(timer);

  }, []);


  return (

    <AnimatePresence>

      {loading && (

        <motion.div

          initial={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:1}}

          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"

        >

          <div className="text-center">

            <motion.div

              animate={{
                scale:[1,1.3,1]
              }}

              transition={{
                duration:1.5,
                repeat:Infinity
              }}

              className="text-7xl"

            >
              ❤️

            </motion.div>


            <h1 className="mt-8 text-3xl font-bold text-pink-400">
              Happy Birthday Minal
            </h1>


            <p className="mt-3 text-gray-300">
              Preparing your special surprise ✨
            </p>


          </div>


        </motion.div>

      )}

    </AnimatePresence>

  );
}