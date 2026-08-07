"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const letterText = `
Dear Minal ❤️

I don't know where to start, because some feelings are difficult to put into words.

Sometimes life surprises us in the most unexpected ways. A simple message on 30 December 2024 at 9:13 PM was just a small moment, but I never knew that this little moment would become such a beautiful memory.

Since then, every conversation, every smile, and every little moment has slowly become special.

I still remember the days when we met, the excitement of finally seeing you, and the happiness of spending those moments together. Every meeting was different, but every meeting meant something special to me.

What I admire about you is not just your beauty, but the person you are. Your smile, your personality, and the little things that make you unique.

On your birthday, I don't just want to wish you a happy day. I want to wish you a life full of happiness, success, peace, and endless reasons to smile.

Thank you for becoming a beautiful part of my life.

Happy Birthday Minal ❤️🎂

With lots of love ❤️
`;

export default function LoveLetter() {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");



  useEffect(() => {

    if(!open) return;


    let index = 0;


    const typing = setInterval(()=>{

      setText(letterText.slice(0,index));

      index++;


      if(index > letterText.length){
        clearInterval(typing);
      }


    },35);


    return ()=>clearInterval(typing);


  },[open]);



  const hearts = Array.from({length:12});



  return (

    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-24 overflow-hidden">


      {
        open && hearts.map((_,i)=>(

          <motion.div

            key={i}

            initial={{
              y:"100vh",
              opacity:0
            }}

            animate={{
              y:"-20vh",
              opacity:[0,1,0]
            }}

            transition={{
              duration:6,
              delay:i*.3,
              repeat:Infinity
            }}

            className="absolute text-pink-400 text-xl"

            style={{
              left:`${Math.random()*100}%`
            }}

          >
            ❤️

          </motion.div>

        ))
      }



      {!open ? (

        <motion.div

          initial={{
            opacity:0,
            scale:.7
          }}

          whileInView={{
            opacity:1,
            scale:1
          }}

          className="text-center z-10"

        >


          <motion.div

            animate={{
              y:[0,-15,0],
              rotate:[0,5,-5,0]
            }}

            transition={{
              duration:3,
              repeat:Infinity
            }}

            onClick={()=>setOpen(true)}

            className="text-9xl cursor-pointer"

          >

            💌

          </motion.div>



          <h2 className="mt-8 text-4xl font-bold text-pink-400">

            A Letter For You ❤️

          </h2>


          <p className="mt-5 text-gray-300">

            Tap the envelope to open your surprise ✨

          </p>


        </motion.div>



      ) : (


        <motion.div

          initial={{
            opacity:0,
            y:80,
            scale:.8
          }}

          animate={{
            opacity:1,
            y:0,
            scale:1
          }}

          transition={{
            duration:1
          }}

          className="relative z-10 max-w-3xl w-full bg-[#fffaf5] text-black rounded-3xl p-8 md:p-12 shadow-2xl"

        >


          <motion.div

            initial={{
              rotateX:90
            }}

            animate={{
              rotateX:0
            }}

            transition={{
              duration:1
            }}

            className="text-center text-4xl mb-8"

          >

            💌

          </motion.div>



          <h2 className="text-center text-4xl font-bold text-pink-500 mb-8">

            For Minal ❤️

          </h2>



          <p className="whitespace-pre-line text-lg leading-relaxed">

            {text}

          </p>



        </motion.div>

      )}


    </section>

  );
}