"use client";

import { useState } from "react";

const things = [
  {
    emoji: "😂",
    text: "You get annoyed with me so easily sometimes, and honestly, half the time I am probably doing it on purpose just to see your reaction.",
  },
  {
    emoji: "😭",
    text: "Whenever you get angry with me, I somehow manage to make it even worse instead of making it better. I don't know why I do that.",
  },
  {
    emoji: "🙄",
    text: "You have that one look you give me when I have done something stupid. I don't even need you to say anything. I already know.",
  },
  {
    emoji: "😂",
    text: "I love how we can start talking about one completely normal thing and somehow end up talking about the most random stuff.",
  },
  {
    emoji: "🥹",
    text: "Sometimes you don't even have to do anything. Just talking to you or having you around is enough to make my day better.",
  },
  {
    emoji: "❤️",
    text: "There are so many little things about you that I notice, even if I don't always tell you. You probably don't even realise half of them.",
  },
  {
    emoji: "🤦‍♂️",
    text: "We can literally argue over something so stupid, both of us get annoyed, and then somehow we are talking normally again like nothing happened.",
  },
  {
    emoji: "😂",
    text: "You know exactly how to annoy me, and the funniest part is that you know I am still going to come back and talk to you anyway.",
  },
  {
    emoji: "❤️",
    text: "I could keep writing about all the little things I love about you, but at the end of the day, I think I just love you for being you.",
  },
];

export default function CrazyThings() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < things.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const item = things[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-3xl text-center">

        {/* Small heading */}
        <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-60">
          Things about you...
        </p>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-serif mb-5">
          Just A Few Things About You ❤️
        </h2>

        {/* Description */}
        <p className="max-w-xl mx-auto mb-12 opacity-70">
          The little things I probably don't say enough.
        </p>

        {/* Card */}
        <div
          key={current}
          className="rounded-3xl border p-10 md:p-14 shadow-xl
                     backdrop-blur-md animate-[fadeIn_0.5s_ease-out]"
        >
          {/* Emoji */}
          <div className="text-6xl mb-7">
            {item.emoji}
          </div>

          {/* Text */}
          <p className="text-xl md:text-2xl leading-relaxed font-serif">
            {item.text}
          </p>

          {/* Counter */}
          <div className="mt-8 text-sm opacity-50">
            {current + 1} / {things.length}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">

          <button
            onClick={previous}
            disabled={current === 0}
            className="px-5 py-3 rounded-full border
                       transition hover:scale-105
                       disabled:opacity-30
                       disabled:cursor-not-allowed"
          >
            ←
          </button>

          <button
            onClick={next}
            disabled={current === things.length - 1}
            className="px-7 py-3 rounded-full border
                       transition hover:scale-105
                       disabled:opacity-30
                       disabled:cursor-not-allowed"
          >
            Next →
          </button>

        </div>

      </div>
    </section>
  );
}