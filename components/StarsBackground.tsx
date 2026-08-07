"use client";

import { motion } from "framer-motion";

export default function StarsBackground() {

  const stars = Array.from({ length: 40 });


  return (

    <div className="absolute inset-0 overflow-hidden pointer-events-none">


      {stars.map((_, i) => (

        <motion.div

          key={i}

          initial={{
            opacity:0,
            y:0
          }}

          animate={{

            opacity:[
              0.2,
              1,
              0.2
            ],

            y:[
              0,
              -40,
              0
            ]

          }}

          transition={{

            duration:
              3 + Math.random()*5,

            delay:
              Math.random()*5,

            repeat:Infinity,

            ease:"easeInOut"

          }}

          className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"

          style={{

            left:`${Math.random()*100}%`,

            top:`${Math.random()*100}%`

          }}

        />

      ))}


    </div>

  );
}