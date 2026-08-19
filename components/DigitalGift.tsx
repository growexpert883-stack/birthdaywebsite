"use client";

import { useState } from "react";

export default function DigitalGift() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-28 overflow-hidden">
      <div className="w-full max-w-3xl text-center">

        {!opened ? (
          <div className="animate-[fadeIn_0.8s_ease-out]">

            <p className="text-xs md:text-sm uppercase tracking-[0.35em] opacity-40 mb-5">
              Ek aur cheez hai tumhare liye...
            </p>

            <h2 className="text-4xl md:text-6xl font-serif">
              Tumhara Gift 🎁❤️
            </h2>

            <p className="mt-5 opacity-60">
              Abhi se dekhne ki koshish mat karna 😂
            </p>

            {/* CLOSED GIFT */}
            <button
              onClick={() => setOpened(true)}
              aria-label="Open your gift"
              className="relative mx-auto mt-16 block w-52 h-52
                         transition-transform duration-500
                         hover:scale-105
                         active:scale-95"
            >

              {/* Glow */}
              <div
                className="absolute inset-3 rounded-full
                           bg-pink-400/20 blur-3xl"
              />

              {/* Box */}
              <div
                className="absolute top-24 left-8 right-8 bottom-5
                           rounded-xl
                           border-2 border-pink-300/60
                           bg-gradient-to-br
                           from-pink-400/70
                           via-rose-400/60
                           to-red-400/70
                           shadow-xl"
              />

              {/* Vertical Ribbon */}
              <div
                className="absolute top-24 bottom-5 left-1/2
                           -translate-x-1/2 w-8
                           bg-white/25
                           border-x border-white/40"
              />

              {/* Lid */}
              <div
                className="absolute top-12 left-3 right-3 h-14
                           rounded-xl
                           border-2 border-pink-300/60
                           bg-gradient-to-r
                           from-rose-400/80
                           via-pink-400/80
                           to-red-400/80
                           shadow-lg"
              />

              {/* Horizontal Ribbon */}
              <div
                className="absolute top-12 left-3 right-3 h-5
                           bg-white/20
                           border-y border-white/40"
              />

              {/* Bow */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2">

                <div
                  className="absolute -left-9 top-2 w-12 h-8
                             border-2 border-pink-300/70
                             bg-rose-400/80
                             rounded-full
                             rotate-[-25deg]"
                />

                <div
                  className="absolute left-[-3px] top-2 w-12 h-8
                             border-2 border-pink-300/70
                             bg-rose-400/80
                             rounded-full
                             rotate-[25deg]"
                />

                <div
                  className="relative w-6 h-6 rounded-full
                             border-2 border-pink-300/70
                             bg-pink-500"
                />

              </div>

            </button>

            <p className="mt-10 text-xs opacity-30">
              Open it 🎁
            </p>

          </div>
        ) : (
          <div className="animate-[fadeIn_1s_ease-out]">

            {/* OPEN GIFT */}
            <div className="relative mx-auto w-52 h-40 mb-14">

              {/* Box */}
              <div
                className="absolute left-8 right-8 bottom-0 h-28
                           rounded-xl
                           border-2 border-pink-300/60
                           bg-gradient-to-br
                           from-pink-400/70
                           via-rose-400/60
                           to-red-400/70
                           shadow-xl"
              />

              {/* Vertical Ribbon */}
              <div
                className="absolute top-12 bottom-0 left-1/2
                           -translate-x-1/2 w-8
                           bg-white/20
                           border-x border-white/40"
              />

              {/* Open Lid */}
              <div
                className="absolute left-3 right-3 top-2 h-14
                           rounded-xl
                           border-2 border-pink-300/60
                           bg-gradient-to-r
                           from-rose-400/80
                           via-pink-400/80
                           to-red-400/80
                           shadow-lg
                           rotate-[-8deg]
                           -translate-y-10"
              />

            </div>

            <p className="text-xs uppercase tracking-[0.35em] opacity-40 mb-6">
              For You ❤️
            </p>

            <h2 className="text-3xl md:text-5xl font-serif">
              Ye tumhare liye hai. 🥹
            </h2>

            <div className="max-w-xl mx-auto mt-8 space-y-5">

              <p className="text-lg leading-relaxed opacity-75">
                Socha tha tumhein birthday pe kya doon...
              </p>

              <p className="text-lg leading-relaxed opacity-75">
                Phir laga jo cheez main dena chahta hu,
                wo kisi box mein aa hi nahi sakti. 😂
              </p>

              <p className="text-xl md:text-2xl font-serif">
                Isliye ye choti si cheez bana di... sirf tumhare liye. ❤️
              </p>

              <p className="text-lg leading-relaxed opacity-70">
                Shayad ye koi mehnga gift nahi hai,
                lekin ismein mera bohot saara time aur pyaar hai.
              </p>

              <p className="text-sm opacity-50 pt-4">
                Happy Birthday, Meri Jaan. ❤️
              </p>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}