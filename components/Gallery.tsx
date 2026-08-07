"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  {
    image: "/gallery/1.JPEG",
    caption: "A beautiful soul who deserves all the happiness in the world ❤️",
  },
  {
    image: "/gallery/2.jpeg",
    caption: "Some smiles are too precious to be forgotten ✨",
  },
  {
    image: "/gallery/3.jpeg",
    caption: "The smile that makes ordinary moments special 🤍",
  },
  {
    image: "/gallery/4.jpeg",
    caption: "A little glimpse of someone truly special 🌸",
  },
  {
    image: "/gallery/5.jpeg",
    caption: "Beauty is not just in looks, it's in the heart ❤️",
  },
  {
    image: "/gallery/6.jpeg",
    caption: "One picture, countless feelings ✨",
  },
  {
    image: "/gallery/7.jpeg",
    caption: "A memory worth keeping forever 🌹",
  },
  {
    image: "/gallery/8.jpeg",
    caption: "Every moment becomes special when it's about you ❤️",
  },
  {
    image: "/gallery/9.jpeg",
    caption: "A beautiful chapter of a beautiful story 🤍",
  },
  {
    image: "/gallery/10.jpeg",
    caption: "Some people make life a little brighter ✨",
  },
  {
    image: "/gallery/11.jpeg",
    caption: "Your happiness is the most beautiful thing to see ❤️",
  },
  {
    image: "/gallery/12.jpeg",
    caption: "A face full of memories and a heart full of kindness 🌸",
  },
  {
    image: "/gallery/13.jpeg",
    caption: "Another reason to smile and celebrate you 🤍",
  },
  {
    image: "/gallery/14.jpeg",
    caption: "A moment captured, a feeling saved forever ✨",
  },
  {
    image: "/gallery/15.jpeg",
    caption: "The world feels a little better with your smile ❤️",
  },
  {
    image: "/gallery/16.jpeg",
    caption: "A special person deserves special memories 🌹",
  },
  {
    image: "/gallery/17.jpeg",
    caption: "Every picture tells a small piece of your story 🤍",
  },
  {
    image: "/gallery/18.jpeg",
    caption: "The final memory before the biggest surprise 🎂❤️",
  },
];


export default function Gallery() {

  return (

    <section className="bg-black py-28 px-6">

      <motion.h2
        initial={{
          opacity:0,
          y:40
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:0.8
        }}
        viewport={{
          once:true
        }}
        className="text-center text-5xl font-bold text-pink-400"
      >
        The Girl Behind My Smile ❤️
      </motion.h2>


      <p className="text-center text-gray-400 mt-5 text-lg">
        A collection of beautiful moments and memories.
      </p>


      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


        {photos.map((photo,index)=>(

          <motion.div

            key={index}

            initial={{
              opacity:0,
              y:60
            }}

            whileInView={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.6,
              delay:index * 0.05
            }}

            viewport={{
              once:true
            }}

            whileHover={{
              scale:1.04,
              rotateY:5
            }}

            className="rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"

          >

            <Image
              src={photo.image}
              alt={`Memory ${index + 1}`}
              width={700}
              height={900}
              className="w-full h-[420px] object-cover"
            />


            <div className="p-6">

              <p className="text-white text-lg leading-relaxed">
                {photo.caption}
              </p>

            </div>


          </motion.div>

        ))}


      </div>


    </section>

  );
}