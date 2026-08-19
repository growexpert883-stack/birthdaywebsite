"use client";

import { useState } from "react";

export default function FinalSurprise() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="w-full max-w-3xl text-center">

        {!opened ? (
          <div className="animate-[fadeIn_1s_ease-out]">

            <p className="text-xs md:text-sm uppercase tracking-[0.4em] opacity-40 mb-6">
              One last thing...
            </p>

            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Before you leave ❤️
            </h2>

            <p className="max-w-xl mx-auto mt-6 text-base md:text-lg opacity-60 leading-relaxed">
              Everything you saw here was made for one person.
              And you already know who that person is. 🥹
            </p>

            <button
              onClick={() => setOpened(true)}
              className="mt-12 px-9 py-4 rounded-full border
                         transition-all duration-300
                         hover:scale-105 hover:shadow-xl"
            >
              Open My Last Message ❤️
            </button>

          </div>
        ) : (
          <div className="animate-[fadeIn_1.2s_ease-out]">

            {/* Heart */}
            <div className="text-6xl mb-10 animate-pulse">
              ❤️
            </div>

            <p className="text-xs uppercase tracking-[0.4em] opacity-40 mb-7">
              For Minal
            </p>

            <h2 className="text-4xl md:text-6xl font-serif">
              Happy Birthday, My Love.
            </h2>

            <div className="max-w-2xl mx-auto mt-10 space-y-7">

              <p className="text-lg md:text-xl leading-relaxed opacity-75">
                I don't know if this little website can ever explain
                everything I feel for you, but I wanted to try.
              </p>

              <p className="text-lg md:text-xl leading-relaxed opacity-75">
                I know I annoy you a lot. I tease you, repeat the same
                things again and again, and sometimes I probably test
                your patience more than I should. 😂
              </p>

              <p className="text-lg md:text-xl leading-relaxed opacity-75">
                But behind all of that is someone who cares about you
                more than he knows how to explain.
              </p>

              <p className="text-lg md:text-xl leading-relaxed opacity-75">
                Sometimes I look at you and genuinely don't know what
                to say. My heart gets faster, I get nervous, and all I
                can think about is how much I love being around you.
              </p>

              <p className="text-xl md:text-2xl font-serif leading-relaxed">
                I don't love you because you're perfect.
                <br />
                I love you because you're you.
              </p>

              <p className="text-xl md:text-2xl font-serif leading-relaxed">
                And somehow, that's become more than enough for my heart.
                ❤️
              </p>

            </div>

            <div className="mt-14">

              <p className="text-2xl md:text-3xl font-serif">
                Happy Birthday, Minal. 🎂❤️
              </p>

              <p className="mt-4 text-sm opacity-40">
                Meri jaan. Meri princess. My favourite person My Everthing.
              </p>

            </div>

            <div className="mt-12 text-3xl tracking-[0.5em]">
              ❤️ ✨ ❤️
            </div>

          </div>
        )}

      </div>
    </section>
  );
}