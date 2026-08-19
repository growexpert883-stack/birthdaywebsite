"use client";

import { useState } from "react";

const memories = [
  {
    number: "01",
    title: "The Day You Made Me Nervous",
    emoji: "🫀",
    text: "I don't think you realize how nervous I get when you're right in front of me. My heart just starts doing its own thing. 😂❤️",
  },
  {
    number: "02",
    title: "The Day I Annoyed You",
    emoji: "😂",
    text: "I knew I was annoying you... and somehow I still continued. I really don't know why annoying you is so fun for me. 😭",
  },
  {
    number: "03",
    title: "The Angry One",
    emoji: "😤",
    text: "You got angry, and suddenly the same person who was teasing you was trying his best to make you smile again.",
  },
  {
    number: "04",
    title: "The Make-Up Mission",
    emoji: "🥹",
    text: "I don't like knowing you're upset with me. So yes, I'll annoy you again tomorrow... but I'll still come back and say sorry. ❤️",
  },
  {
    number: "05",
    title: "Just Being Together",
    emoji: "🤍",
    text: "Sometimes I don't need a special plan. Just talking to you, looking at you and having you around is enough for me.",
  },
  {
    number: "06",
    title: "The One I Keep",
    emoji: "🌙",
    text: "There are some moments I don't want to forget. Not because they were perfect, but because they had you in them.",
  },
];

export default function MemoryTickets() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="min-h-screen px-6 py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] opacity-50 mb-3">
            Little moments ❤️
          </p>

          <h2 className="text-4xl md:text-5xl font-serif">
            Memories I'd Keep Forever
          </h2>

          <p className="mt-4 opacity-60">
            Some memories don't need a date to be special.
          </p>
        </div>

        {/* Tickets */}
        <div className="grid md:grid-cols-2 gap-6">

          {memories.map((memory, index) => {
            const isOpen = open === index;

            return (
              <button
                key={memory.number}
                onClick={() =>
                  setOpen(isOpen ? null : index)
                }
                className="text-left w-full group"
              >
                <div
                  className={`
                    relative overflow-hidden
                    rounded-3xl border
                    p-6 md:p-7
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:shadow-xl
                    ${
                      isOpen
                        ? "min-h-[250px]"
                        : "min-h-[180px]"
                    }
                  `}
                >

                  {/* Ticket number */}
                  <div className="flex items-start justify-between">

                    <div>
                      <span className="text-xs tracking-[0.25em] opacity-40">
                        MEMORY TICKET
                      </span>

                      <p className="text-sm opacity-40 mt-1">
                        #{memory.number}
                      </p>
                    </div>

                    <span className="text-3xl">
                      {memory.emoji}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif mt-8">
                    {memory.title}
                  </h3>

                  {!isOpen && (
                    <p className="text-xs opacity-40 mt-4">
                      Tap to open ❤️
                    </p>
                  )}

                  {/* Open message */}
                  {isOpen && (
                    <div className="mt-6 animate-[fadeIn_0.4s_ease-out]">

                      <div className="h-px w-full opacity-20 border-t mb-5" />

                      <p className="text-sm md:text-base leading-relaxed opacity-80">
                        {memory.text}
                      </p>

                      <p className="text-xs opacity-40 mt-6">
                        Keep this one. ❤️
                      </p>

                    </div>
                  )}

                  {/* Ticket decoration */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-16 border-l border-dashed opacity-20" />

                </div>
              </button>
            );
          })}

        </div>

        <p className="text-center text-xs opacity-30 mt-10">
          Tap the memories... some things are better opened slowly. ❤️
        </p>

      </div>
    </section>
  );
}