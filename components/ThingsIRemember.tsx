"use client";

import { useState } from "react";

const memories = [
  {
    emoji: "😂",
    title: "Tumhari Hansi",
    text: "Tum jab kisi baat pe dil se hasti ho na, mujhy bohot achi lagti ho. Pta nhi kyun, bas tumhari hansi dekh k mera mood bhi acha ho jata h.",
  },
  {
    emoji: "🙄",
    title: "Tumhara Gussa",
    text: "Tumhara gussa bhi yaad h mujhy 😂 Khas taur pe jab meri kisi harkat ki wajah se ho. Phir bhi pata nahi kyun tum gusse mein bhi cute lagti ho.",
  },
  {
    emoji: "🥹",
    title: "Tumhari Care",
    text: "Tum care karti ho to shayad tumhein wo koi badi baat nahi lagti, lekin main notice karta hu. Tumhari ye choti choti cheezen mujhy yaad rehti hain.",
  },
  {
    emoji: "😈",
    title: "Tumhari Shararatein",
    text: "Tum jitni seedhi banti ho na, utni ho nahi 😂 Mujhy tumhari wo wali side bhi bohot achi lagti h jo sirf apno ke sath hoti h.",
  },
  {
    emoji: "❤️",
    title: "Tumhari Baatein",
    text: "Kabhi kabhi tum bilkul normal si baat karti ho aur baad mein mujhy wahi baat yaad hoti rehti h. Tumhein shayad iska andaza bhi nahi.",
  },
  {
    emoji: "🥰",
    title: "Tumhari Aadatain",
    text: "Tumhari kuch aadatein aisi hain jo shayad tumhein bilkul normal lagti hain, lekin mujhy wo hi choti choti cheezen tumhari sabse zyada yaad aati hain.",
  },
  {
    emoji: "🫶",
    title: "Tum Mere Sath",
    text: "Mujhy sabse zyada acha ye lagta h k tum mere sath bilkul apni si rehti ho. Na zyada sochna, na kuch pretend karna. Bas tum.",
  },
  {
    emoji: "🌙",
    title: "Aur Tum...",
    text: "Sach kahu to tumhari ek cheez choose karna mushkil h. Tumhari ye sari choti choti baatein mil k tumhein meri favorite person banati hain. ❤️",
  },
];

export default function ThingsIRemember() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="min-h-screen px-6 py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] opacity-50 mb-3">
            Tumhari choti choti baatein
          </p>

          <h2 className="text-4xl md:text-5xl font-serif">
            Tumhari Kuch Baatein ❤️
          </h2>

          <p className="mt-4 opacity-60 max-w-xl mx-auto">
            Shayad tumhein yaad bhi na ho... mujhy hain.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {memories.map((memory, index) => {
            const isSelected = selected === index;

            return (
              <button
                key={index}
                onClick={() =>
                  setSelected(isSelected ? null : index)
                }
                className="text-left w-full"
              >
                <div
                  className={`
                    h-full min-h-[210px]
                    rounded-3xl border
                    p-6
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:shadow-xl
                    ${
                      isSelected
                        ? "scale-[1.02]"
                        : ""
                    }
                  `}
                >
                  {/* Emoji */}
                  <div className="text-4xl mb-6">
                    {memory.emoji}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif">
                    {memory.title}
                  </h3>

                  {/* Closed Card */}
                  {!isSelected ? (
                    <p className="mt-5 text-xs opacity-40">
                      Dekho kya yaad h mujhy →
                    </p>
                  ) : (
                    /* Open Card */
                    <p className="mt-5 text-sm leading-relaxed opacity-75 animate-[fadeIn_0.4s_ease-out]">
                      {memory.text}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Ending */}
        <p className="text-center mt-10 text-sm opacity-40">
          Aur bhi bohot kuch h... bas sab kuch yahan likhna mumkin nahi ❤️
        </p>

      </div>
    </section>
  );
}