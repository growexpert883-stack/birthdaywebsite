"use client";

import { useEffect, useRef, useState } from "react";

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

export default function OurChat() {
  const [visible, setVisible] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible >= messages.length) return;

    const timer = setTimeout(() => {
      setVisible((prev) => prev + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [visible]);

  return (
    <section className="min-h-screen flex items-center justify-center px-5 py-24">
      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] opacity-50 mb-3">
            Bas aisi hi baatein ❤️
          </p>

          <h2 className="text-4xl md:text-5xl font-serif">
            Hamari Chat 💬
          </h2>

          <p className="mt-4 opacity-60">
            Koi special baat nahi... bas hum 😂❤️
          </p>
        </div>

        {/* WhatsApp-style Chat */}
        <div className="overflow-hidden rounded-[2rem] border shadow-2xl backdrop-blur-md">

          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b">
            
            <div className="relative">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center text-xl">
                ❤️
              </div>

              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 bg-green-500" />
            </div>

            <div>
              <p className="font-medium text-base">
                Meri Jaanu ❤️
              </p>

              <p className="text-xs opacity-50">
                online
              </p>
            </div>

          </div>

          {/* Chat Area */}
          <div className="px-4 py-5 min-h-[520px] max-h-[600px] overflow-y-auto">

            <div className="flex flex-col gap-2">

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
                    className={`
                      max-w-[82%]
                      px-4 py-2.5
                      text-[15px]
                      leading-relaxed
                      shadow-sm
                      animate-[chatMessage_0.35s_ease-out]
                      ${
                        message.from === "me"
                          ? "rounded-2xl rounded-br-md border"
                          : "rounded-2xl rounded-bl-md border"
                      }
                    `}
                  >
                    {message.text}

                    <span className="ml-2 text-[10px] opacity-40 whitespace-nowrap">
                      {index < 6
                        ? "11:4" + index
                        : index < 12
                        ? "11:5" + (index - 6)
                        : "11:6" + (index - 12)}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing */}
              {visible < messages.length && (
                <div className="flex justify-start mt-1">
                  <div className="rounded-2xl rounded-bl-md border px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />

            </div>
          </div>

          {/* Fake input */}
          <div className="px-4 py-3 border-t">
            <div className="rounded-full border px-5 py-3 text-sm opacity-40">
              Type a message...
            </div>
          </div>

        </div>

        {/* Ending */}
        {visible >= messages.length && (
          <div className="text-center mt-8 animate-[fadeIn_0.8s_ease-out]">
            <p className="text-sm opacity-60">
              Aur phir baat chalti hi rehti hai 😂❤️
            </p>

            <p className="mt-3 text-xs opacity-40">
              ...because somehow we always have something to say.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}