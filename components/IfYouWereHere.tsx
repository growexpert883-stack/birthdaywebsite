"use client";

import { useEffect, useState } from "react";

const lines = [
  "If you were here right now...",
  "I would probably annoy you first. 😂",
  "You would probably get angry at me...",
  "and I would probably pretend I did nothing. 😭",
  "Then I would try to make you smile again.",
  "But honestly...",
  "I think I would just want to sit with you for a while.",
  "Talk about random things...",
  "make you laugh...",
  "and just enjoy having you there.",
  "Because sometimes I don't need anything special.",
  "I just like having you around. ❤️",
];

export default function IfYouWereHere() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 1100);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-pink-400/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-52 h-52 rounded-full bg-purple-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] opacity-50 mb-6">
          Just a little thought...
        </p>

        <div className="space-y-5">
          {lines.slice(0, visibleLines).map((line, index) => (
            <p
              key={index}
              className={`text-xl md:text-2xl font-serif leading-relaxed ${
                index === lines.length - 1
                  ? "text-2xl md:text-3xl font-medium mt-8"
                  : "opacity-90"
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        {visibleLines < lines.length && (
          <div className="mt-10 flex justify-center gap-1 opacity-40">
            <span className="animate-bounce">•</span>
            <span className="animate-bounce [animation-delay:150ms]">•</span>
            <span className="animate-bounce [animation-delay:300ms]">•</span>
          </div>
        )}
      </div>
    </section>
  );
}