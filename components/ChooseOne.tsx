"use client";

import { useState } from "react";

const choices = [
  {
    title: "Mera Care Karna 🫶",
    reply:
      "Acha 👀 ye mujhy acha laga... main waise bhi tumhari care karna kabhi band nahi karunga ❤️",
  },
  {
    title: "Mera Tumhein Tang Karna 😂",
    reply:
      "Ye choose kiya hai? 😂 Phir baad mein ye mat kehna ke main tumhein bohot tang karta hu ❤️",
  },
  {
    title: "Meri Baatein 🥹",
    reply:
      "Haan ye maan leta hu 😂 Lekin meri faltu baatein bhi itni hi pasand hain ya sirf achi wali?",
  },
  {
    title: "Mera Pyaar ❤️",
    reply:
      "Hmm... ye answer mujhy pasand aya 🥹❤️ Ab isko change karne ka option nahi hai.",
  },
];

export default function ChooseOne() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-28">
      <div className="w-full max-w-3xl text-center">

        {/* Small Heading */}
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] opacity-50 mb-5">
          Chalo ek baat batao...
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-serif">
          Mujh Mein Sabse Acha Kya Lagta Hai? ❤️
        </h2>

        {/* Description */}
        <p className="mt-5 opacity-60">
          Soch samajh k choose karna... baad mein change nahi hoga 😂
        </p>

        {/* Choices */}
        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {choices.map((choice, index) => {
            const isSelected = selected === index;

            return (
              <button
                key={choice.title}
                onClick={() => setSelected(index)}
                className={`
                  rounded-3xl border p-6
                  text-lg font-serif
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  ${
                    isSelected
                      ? "scale-[1.03] shadow-xl"
                      : ""
                  }
                `}
              >
                {choice.title}
              </button>
            );
          })}
        </div>

        {/* Selected Answer */}
        {selected !== null && (
          <div
            key={selected}
            className="
              mt-10
              rounded-3xl
              border
              p-7 md:p-9
              animate-[fadeIn_0.5s_ease-out]
            "
          >
            <p className="text-lg md:text-xl leading-relaxed">
              {choices[selected].reply}
            </p>
          </div>
        )}

        {/* Ending */}
        {selected !== null && (
          <p className="mt-8 text-sm opacity-40">
            Bas ab jo choose kiya hai usi pe rehna 😂❤️
          </p>
        )}

      </div>
    </section>
  );
}