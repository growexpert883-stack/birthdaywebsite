"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Cake() {

  const [blown, setBlown] = useState(false);


  return (

    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">


      <div className="text-center">


        <motion.h2

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="text-5xl font-bold text-pink-400"

        >
          Make A Wish 🎂
        </motion.h2>



        <p className="text-gray-300 mt-5 text-lg">
          Click the candle and make your birthday wish ❤️
        </p>



        <motion.div

          animate={{
            scale:[1,1.05,1]
          }}

          transition={{
            duration:2,
            repeat:Infinity
          }}

          className="mt-16 text-9xl cursor-pointer"

          onClick={()=>setBlown(true)}

        >

          🎂

        </motion.div>



        <div className="text-6xl mt-[-30px]">

          {blown ? "💨" : "🕯️"}

        </div>



        {
          blown && (

            <motion.div

              initial={{
                opacity:0,
                scale:0.5
              }}

              animate={{
                opacity:1,
                scale:1
              }}

              className="mt-10"

            >

              <h1 className="text-5xl font-bold text-pink-400">
                Happy Birthday Minal ❤️
              </h1>


              <p className="mt-6 text-xl text-gray-300">
                May your life always be filled with happiness,
                love and beautiful moments. ✨
              </p>


            </motion.div>

          )
        }


      </div>


    </section>

  );
}