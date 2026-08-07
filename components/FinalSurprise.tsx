"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FinalSurprise() {

  const [hearts, setHearts] = useState<number[]>([]);


  useEffect(() => {

    setHearts(
      Array.from({length:40}, (_,i)=>i)
    );

  }, []);


  return (

    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6">


      {/* Floating Hearts */}

      {
        hearts.map((heart)=>(

          <motion.div

            key={heart}

            initial={{
              y:500,
              opacity:0
            }}

            animate={{
              y:-900,
              opacity:[0,1,0]
            }}

            transition={{
              duration:5,
              delay:heart*0.1,
              repeat:Infinity
            }}

            className="absolute text-3xl"
            style={{
              left:`${Math.random()*100}%`
            }}

          >
            ❤️

          </motion.div>

        ))
      }



      <motion.div

        initial={{
          opacity:0,
          scale:0.5
        }}

        whileInView={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:1
        }}

        className="relative z-10 text-center max-w-3xl"

      >


        <h1 className="text-6xl font-bold text-pink-400">
          Happy Birthday Minal ❤️
        </h1>


        <p className="mt-8 text-xl text-gray-300 leading-relaxed">

          I hope this little surprise brought a smile to your face.

          <br/><br/>

          You are a beautiful person and you deserve all the happiness,
          love and success in the world.

          <br/><br/>

          Thank you for becoming a special part of my life. ✨

        </p>


        <div className="mt-10 text-7xl">
          🎂 🎉 ❤️
        </div>


      </motion.div>


    </section>

  );
}