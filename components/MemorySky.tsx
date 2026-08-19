"use client";

import { useState } from "react";

const memories = [
  {
    title: "A Little Memory ❤️",
    text: "Some moments with you were short, but somehow they stayed with me much longer.",
  },
  {
    title: "That Feeling 🫀",
    text: "There are moments when I look at you and suddenly forget what I was about to say.",
  },
  {
    title: "Your Voice 🌙",
    text: "Sometimes I don't even need an interesting conversation. I just like hearing you talk.",
  },
  {
    title: "Your Little Smile ✨",
    text: "You probably don't realize it, but your smile can completely change my mood.",
  },
  {
    title: "Us 😂❤️",
    text: "We can go from annoying each other to being ridiculously sweet in the same conversation.",
  },
  {
    title: "One More Thing...",
    text: "If I could keep one feeling forever, it would probably be the feeling of being around you.",
  },
];

export default function MemorySky() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-28 flex items-center justify-center">

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">

        <span className="absolute top-[12%] left-[12%] text-xs opacity-40">
          ✦
        </span>

        <span className="absolute top-[22%] right-[18%] text-sm opacity-50">
          ✦
        </span>

        <span className="absolute top-[65%] left-[8%] text-sm opacity-40">
          ✦
        </span>

        <span className="absolute bottom-[12%] right-[12%] text-xs opacity-50">
          ✦
        </span>

        <span className="absolute top-[48%] right-[7%] text-xs opacity-30">
          ✦
        </span>

      </div>

      <div className="relative z-10 w-full max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-xs md:text-sm uppercase tracking-[0.35em] opacity-40 mb-5">
            Look a little closer...
          </p>

          <h2 className="text-4xl md:text-6xl font-serif">
            Our Little Night Sky 🌙
          </h2>

          <p className="mt-5 opacity-60">
            Every star is hiding something for you. ✨
          </p>

        </div>

        {/* Star Field */}
        <div className="relative mx-auto w-full max-w-3xl h-[430px] md:h-[500px]">

          {memories.map((memory, index) => {

            const positions = [
              "top-[8%] left-[18%]",
              "top-[20%] right-[20%]",
              "top-[43%] left-[8%]",
              "top-[48%] right-[10%]",
              "bottom-[15%] left-[30%]",
              "bottom-[8%] right-[28%]",
            ];

            const isSelected = selected === index;

            return (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`
                  absolute
                  ${positions[index]}
                  w-14 h-14
                  rounded-full
                  flex items-center justify-center
                  text-2xl
                  transition-all duration-500
                  hover:scale-150
                  ${
                    isSelected
                      ? "scale-150"
                      : "animate-pulse"
                  }
                `}
              >
                ✦
              </button>
            );
          })}

          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            <div className="text-center opacity-20">

              <div className="text-5xl mb-3">
                🌙
              </div>

              <p className="text-sm">
                us
              </p>

            </div>

          </div>

        </div>

        {/* Selected Memory */}
        {selected !== null && (
          <div
            key={selected}
            className="max-w-xl mx-auto text-center
                       rounded-3xl border p-8 md:p-10
                       animate-[fadeIn_0.5s_ease-out]"
          >

            <p className="text-xl md:text-2xl font-serif mb-5">
              {memories[selected].title}
            </p>

            <p className="leading-relaxed opacity-70">
              {memories[selected].text}
            </p>

            <p className="mt-6 text-xs opacity-30">
              You found this one. ✨
            </p>

          </div>
        )}

      </div>
    </section>
  );
}