"use client";

import { useEffect, useState } from "react";

const messages = [
  { from: "me", text: "Jan 👀" },
  { from: "her", text: "G?" },
  { from: "me", text: "Kia kr rhi ho" },
  { from: "her", text: "Bs leti hu" },
  { from: "me", text: "Acha mujhy bhool gai ho?" },
  { from: "her", text: "Nhi 😂" },
  { from: "me", text: "Phir khud sy msg q nhi kiya" },
  { from: "her", text: "Abhi to kiya h 😭" },
  { from: "me", text: "Han wo bhi mere msg k baad" },
  { from: "her", text: "Tmhy har baat ka masla hota h" },
  { from: "me", text: "Tm sy ho to hota h ❤️" },
  { from: "her", text: "Pagal" },
  { from: "me", text: "Tmhary lia hu ❤️" },
  { from: "her", text: "Acha ji 😂" },
  { from: "me", text: "Jan" },
  { from: "her", text: "G meri Jan?" },
  { from: "me", text: "Kuch nhi bs tm sy baat krni thi ❤️" },
  { from: "her", text: "Haan kro phir 😂❤️" },
];

const hearts = [
  "❤️",
  "♡",
  "♥",
  "❤",
  "♡",
  "❤️",
  "♥",
  "♡",
  "❤",
  "❤️",
  "♡",
  "♥",
];

export default function OurChat() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= messages.length) return;

    const timer = setTimeout(() => {
      setVisible((prev) => prev + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-5 py-24">

      {/* Falling Hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {hearts.map((heart, index) => (
          <span
            key={index}
            className="absolute top-[-40px] text-xl opacity-40 animate-[fall_8s_linear_infinite]"
            style={{
              left: `${5 + index * 8}%`,
              animationDelay: `${index * 0.7}s`,
              animationDuration: `${6 + (index % 4)}s`,
            }}
          >
            {heart}
          </span>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4">
            Just us ❤️
          </p>

          <h2 className="text-4xl md:text-5xl font-serif">
            Hamari Chat
          </h2>

          <p className="mt-4 text-white/50">
            Kuch special nahi... bas hum 😂❤️
          </p>

        </div>

        {/* Chat Box */}
        <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-2xl">

          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl">
                ❤️
              </div>

              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-black" />
            </div>

            <div>
              <p className="font-medium">
                Meri Jaanu ❤️
              </p>

              <p className="text-xs text-white/40">
                online
              </p>
            </div>

          </div>

          {/* Messages */}
          <div className="px-4 py-5 min-h-[520px]">

            <div className="flex flex-col gap-3">

              {messages.slice(0, visible).map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.from === "me"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-[82%] px-4 py-3 text-[15px] leading-relaxed shadow-lg animate-[chatMessage_0.4s_ease-out] ${
                      message.from === "me"
                        ? "bg-white text-black rounded-2xl rounded-br-md"
                        : "bg-black text-white border border-white/20 rounded-2xl rounded-bl-md"
                    }`}
                  >

                    {message.text}

                    <span
                      className={`ml-2 text-[10px] ${
                        message.from === "me"
                          ? "text-black/40"
                          : "text-white/40"
                      }`}
                    >
                      {index < 6
                        ? `11:4${index}`
                        : index < 12
                        ? `11:5${index - 6}`
                        : `11:6${index - 12}`}
                    </span>

                  </div>

                </div>
              ))}

              {/* Typing */}
              {visible < messages.length && (
                <div className="flex justify-start">

                  <div className="bg-black border border-white/20 rounded-2xl rounded-bl-md px-4 py-3">

                    <div className="flex gap-1">

                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" />

                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:150ms]" />

                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:300ms]" />

                    </div>

                  </div>

                </div>
              )}

            </div>

          </div>

          {/* Fake Input */}
          <div className="px-4 py-3 border-t border-white/10">

            <div className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/25">
              Type a message...
            </div>

          </div>

        </div>

        {/* Ending */}
        {visible >= messages.length && (
          <div className="text-center mt-8 animate-[fadeIn_0.8s_ease-out]">

            <p className="text-sm text-white/60">
              Aur phir baat chalti hi rehti hai 😂❤️
            </p>

            <p className="mt-3 text-xs text-white/30">
              Somehow, we always have something to say.
            </p>

          </div>
        )}

      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-60px) rotate(0deg);
            opacity: 0;
          }

          10% {
            opacity: 0.45;
          }

          90% {
            opacity: 0.35;
          }

          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes chatMessage {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}