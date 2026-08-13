"use client";

import { useState } from "react";

const reasons = [
  "I love you because you are simply you. ❤️",
  "I love annoying you, even though I already know you're going to get angry. 😂",
  "I love your angry reactions when I keep saying the same thing again and again.",
  "I love that you don't always listen to me, even when I keep telling you the same thing. 😭",
  "I love saying things again and again just to see how long you can tolerate me. 😂",
  "I love that after irritating you, I'm the one who has to come and say sorry.",
  "I love making you smile after you've been angry with me.",
  "I love how much I care about your mood and how you are feeling.",
  "I love your sarcastic humor. Sometimes you roast me without even trying. 😂",
  "I love that you can make a normal conversation funny.",
  "I love your little shararatein and the way you enjoy disturbing people for no reason. 😭",
  "I love how you like annoying your family just for fun. 😂",
  "I love your mischievous side because it makes you even more fun to be around.",
  "I love that you enjoy reading and can completely disappear into a book. 📖",
  "I love hearing you talk about the things you enjoy reading.",
  "I love that you have your own interests and your own little world.",
  "I love our first message on 30 December 2024 at 9:13 PM.",
  "I love that one simple message somehow became the beginning of our story.",
  "I love our first meeting on 13 July 2025. 🤍",
  "I love that after talking for so long, I finally got to see you in person.",
  "I love that you came with your sister that first time. 😂",
  "I love how nervous and excited that first meeting felt for me.",
  "I love that 13 July became a date I'll always remember.",
  "I love that we met again on 20 August 2025.",
  "I love that you came with your friend that day.",
  "I love that I teased you that day and you got REALLY angry with me. 😭",
  "I love that even that angry moment became one of our memories.",
  "I love that after your friend left, I had to start trying to make you happy again. 😂",
  "I love that I can't just leave you upset when I know I've made you angry.",
  "I love that saying sorry to you actually matters to me.",
  "I love our little arguments because they are also part of our story.",
  "I love that even when I annoy you, I genuinely care about you.",
  "I love that your happiness matters to me.",
  "I love that I always want to see you smiling.",
  "I love our meeting on 31 August 2025. ✨",
  "I love that even a short meeting with you can become a beautiful memory.",
  "I love that every meeting we've had feels special in its own way.",
  "I love 26 April 2026 because you came alone that day. ❤️",
  "I love that it was just you and me, and somehow that made the day even more special.",
  "I love spending time with you, even when we're doing nothing special.",
  "I love 13 June 2026 because it gave us another memory together. 🌹",
  "I love that every time we meet, I leave with another memory of you.",
  "I love that random things during my day can remind me of you.",
  "I love that you became someone I genuinely think about a lot.",
  "I love that I can be stupid and annoying around you without pretending to be someone else. 😂",
  "I love that you somehow tolerate me even though I know I can be VERY annoying. 😭",
  "I love that behind all my teasing, I have a lot of care and love for you.",
  "I love that I don't need one specific reason to love you.",
  "I love all the little things that make you who you are.",
  "I love you simply because you're you, and after everything we've shared, if I had to choose again, I'd still choose you. ❤️",
];

export default function Reasons() {
  const [current, setCurrent] = useState(0);

  const isLast = current === reasons.length - 1;

  const nextReason = () => {
    if (!isLast) {
      setCurrent((prev) => prev + 1);
    }
  };

  const previousReason = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <section
      id="reasons"
      className="relative min-h-screen flex items-center justify-center px-5 py-20"
    >
      <div className="w-full max-w-2xl text-center">

        <p className="mb-3 text-sm tracking-[0.3em] uppercase opacity-60">
          A little something for you
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          50 Reasons Why I Love You ❤️
        </h2>

        <p className="mb-10 opacity-70">
          One at a time... because apparently 50 reasons are not enough.
        </p>

        <div
          key={current}
          className="rounded-3xl p-8 md:p-12 shadow-xl border backdrop-blur-sm
                     animate-[fadeIn_0.5s_ease-out]"
        >
          <div className="text-sm opacity-60 mb-5">
            Reason {current + 1} / {reasons.length}
          </div>

          <div className="text-2xl md:text-3xl leading-relaxed font-serif">
            {reasons[current]}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">

          <button
            onClick={previousReason}
            disabled={current === 0}
            className="px-5 py-3 rounded-full border transition
                       disabled:opacity-30 disabled:cursor-not-allowed
                       hover:scale-105"
          >
            ← Previous
          </button>

          {!isLast ? (
            <button
              onClick={nextReason}
              className="px-7 py-3 rounded-full border transition
                         hover:scale-105"
            >
              Next Reason →
            </button>
          ) : (
            <button
              onClick={() => {
                document
                  .getElementById("love-letter")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3 rounded-full border transition
                         hover:scale-105"
            >
              Read My Love Letter ❤️
            </button>
          )}

        </div>

        <div className="mt-8 h-1.5 w-full rounded-full bg-black/10 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${((current + 1) / reasons.length) * 100}%`,
            }}
          />
        </div>

      </div>
    </section>
  );
}