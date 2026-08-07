"use client";

import { motion } from "framer-motion";

const moments = [
  {
    date: "30 December 2024",
    time: "9:13 PM",
    title: "💬 The First Message",
    text: "30 December 2024, 9:13 PM. It looked like just another ordinary message, but it quietly became the beginning of something very special. Neither of us could have imagined that one simple conversation would slowly turn into endless chats, random laughs, late-night conversations, and memories that I would always treasure. Looking back now, it's funny how a single notification had the power to change my life in ways I never expected.",
  },

  {
    date: "13 July 2025",
    time: "🤍",
    title: "Our First Meeting",
    text: "After insisting a little more than I probably should have (okay... maybe a lot 😅), you finally agreed to meet me. You came with your sister, so I knew I had to behave like the most decent person on Earth. I was trying to stay calm and act normal, but inside I was nervous the entire time. Seeing you for the very first time in person felt completely different from talking through messages. That day wasn't just our first meeting—it became the beginning of memories I'll never forget.",
  },

  {
  date: "20 August 2025",
  time: "🌸",
  title: "The Angry Princess 😤❤️",
  text: "This day was definitely different. You came with your friend... and somehow you were a little angry with me. 😅 I still remember trying to figure out what I had done wrong while pretending everything was fine. For a moment, I thought my chances of making you smile had completely disappeared. But even with your cute little anger, I was just happy to see you. Looking back now, it's actually one of the funniest memories because your angry face was somehow just as adorable as your smile. Maybe I deserved that attitude... or maybe you just wanted to keep me worried for a while. 😂❤️",
},

  {
    date: "31 August 2025",
    time: "✨",
    title: "One More Memory",
    text: "You came with your sister once again, and by now I had accepted that she was probably our unofficial security guard. 😄 Even though we couldn't have all the conversations we wanted, every little moment still meant so much to me. Funny enough, the shortest meetings somehow became the longest memories. I always went home smiling because another page had been added to our story.",
  },

  {
    date: "26 April 2026",
    time: "❤️",
    title: "Just You & Me",
    text: "This day felt different from the moment it began. For the very first time, you came alone. No sister, no friend... just you and me. Somehow, everything felt calmer, easier, and more beautiful. We talked, laughed, and shared moments that I wish I could pause forever. It wasn't about where we were or what we were doing—it was simply because I was with you. That day became one of the happiest memories I have, and every time I think about it, it still makes me smile.",
  },

  {
    date: "13 June 2026",
    time: "🌹",
    title: "Another Precious Moment",
    text: "Another meeting, another beautiful memory. Every time we met, I realized that happiness doesn't always come from grand adventures or expensive plans. Sometimes, it's simply sitting beside the person who unknowingly makes your heart feel at peace. The conversations, the laughter, the little moments that most people would forget... those became priceless to me. If I could relive one ordinary day again and again, it would probably be one of the days I spent with you.",
  },

  {
    date: "21 August 2026",
    time: "🎂",
    title: "Happy Birthday ❤️",
    text: "Happy Birthday to the most beautiful person I've ever had the chance to know. Today isn't just another date on the calendar—it's the day someone truly special came into this world. Thank you for every conversation, every laugh, every meeting, and every memory we've shared. Whether you realize it or not, you've brought so much happiness into my life. I don't know what tomorrow has planned for us, but I know that meeting you has been one of the greatest blessings of my life. I made this little website because I wanted you to have something that would always remind you how incredibly important you are to me. I hope your smile today is as beautiful as the happiness you've given me. Happy Birthday, and I wish every dream in your heart comes true. ❤️🎂✨",
  },
];


export default function Timeline(){

  return(

    <section
 id="story"
 className="min-h-screen bg-black text-white py-24 px-6"
>

      <h2 className="text-center text-5xl font-bold text-pink-400 mb-16">
        Our Little Story ❤️
      </h2>


      <div className="max-w-3xl mx-auto space-y-10">

        {moments.map((item,index)=>(

          <motion.div

            key={index}

            initial={{
              opacity:0,
              x:index % 2 === 0 ? -80 : 80
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.8
            }}

            viewport={{
              once:true
            }}

            className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8"

          >

            <p className="text-pink-300">
              {item.date} {item.time}
            </p>


            <h3 className="text-3xl font-bold mt-3">
              {item.title}
            </h3>


            <p className="text-gray-300 mt-4 text-lg">
              {item.text}
            </p>


          </motion.div>

        ))}

      </div>

    </section>

  );
}