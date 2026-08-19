"use client";

import { useEffect, useState } from "react";

export default function Heartbeat() {
  const [started, setStarted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!started) return;

    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, [started]);

  return (
    <>
      <style jsx>{`
        @keyframes heartBeat {
          0% {
            transform: scale(1);
          }

          8% {
            transform: scale(1.18);
          }

          16% {
            transform: scale(1);
          }

          24% {
            transform: scale(1.22);
          }

          32% {
            transform: scale(1);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes ecg {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(1);
          }

          50% {
            opacity: 0.5;
            transform: scale(1.15);
          }
        }

        .heartbeat {
          animation: heartBeat 0.9s ease-in-out infinite;
        }

        .ecg {
          animation: ecg 2s linear infinite;
        }

        .fade-up {
          animation: fadeUp 1s ease-out forwards;
        }

        .glow {
          animation: pulseGlow 1.8s ease-in-out infinite;
        }
      `}</style>

      <section className="min-h-screen flex items-center justify-center px-6 py-28 overflow-hidden">
        <div className="w-full max-w-3xl text-center">

          {/* INTRO */}
          {!started && (
            <div className="fade-up">

              <p className="text-xs md:text-sm uppercase tracking-[0.35em] opacity-50 mb-5">
                There's something I never told you...
              </p>

              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                You do something to my heart. ❤️
              </h2>

              <p className="max-w-lg mx-auto mt-6 text-base md:text-lg opacity-60 leading-relaxed">
                I don't know if you've ever noticed it,
                but there's a little problem I have whenever
                you're in front of me.
              </p>

              <button
                onClick={() => setStarted(true)}
                className="mt-10 px-8 py-4 rounded-full border
                           transition-all duration-300
                           hover:scale-105 hover:shadow-xl"
              >
                See what happens ❤️
              </button>

            </div>
          )}

          {/* HEARTBEAT */}
          {started && (
            <div className="fade-up">

              <p className="text-xs md:text-sm uppercase tracking-[0.35em] opacity-40 mb-10">
                This is what you do to me...
              </p>

              {/* HEART */}
              <div className="relative flex justify-center items-center h-44">

                <div
                  className="absolute w-40 h-40 rounded-full blur-3xl glow"
                  style={{
                    background:
                      "rgba(244, 63, 94, 0.25)",
                  }}
                />

                <div className="relative text-8xl md:text-[120px] heartbeat">
                  ❤️
                </div>

              </div>

              {/* ECG */}
              <div className="relative w-full max-w-2xl h-28 mx-auto mt-5 overflow-hidden">

                <div className="absolute inset-0 flex items-center opacity-20">
                  <div className="w-full border-t" />
                </div>

                <div className="absolute left-0 top-0 h-full flex w-[200%] ecg">

                  {/* First ECG */}
                  <svg
                    viewBox="0 0 600 100"
                    className="w-1/2 h-full"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      points="
                        0,50
                        90,50
                        120,50
                        135,50
                        150,15
                        165,85
                        180,50
                        205,50
                        220,30
                        235,70
                        250,50
                        360,50
                        390,50
                        405,12
                        420,88
                        435,50
                        600,50
                      "
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>

                  {/* Second ECG for seamless loop */}
                  <svg
                    viewBox="0 0 600 100"
                    className="w-1/2 h-full"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      points="
                        0,50
                        90,50
                        120,50
                        135,50
                        150,15
                        165,85
                        180,50
                        205,50
                        220,30
                        235,70
                        250,50
                        360,50
                        390,50
                        405,12
                        420,88
                        435,50
                        600,50
                      "
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>

                </div>

              </div>

              {/* TEXT */}
              {showMessage && (
                <div className="fade-up mt-10 space-y-6">

                  <h3 className="text-2xl md:text-4xl font-serif">
                    Yeah... that's basically it. 😭❤️
                  </h3>

                  <p className="max-w-xl mx-auto text-base md:text-lg leading-relaxed opacity-70">
                    Whenever I see you, my heartbeat gets faster.
                    I suddenly become nervous, forget half the things
                    I wanted to say, and somehow just keep looking at you.
                  </p>

                  <p className="max-w-xl mx-auto text-base md:text-lg leading-relaxed opacity-70">
                    I don't know what you do to me, Minal...
                    but whatever it is, I don't want it to stop.
                  </p>

                  <div className="pt-4">
                    <p className="text-xl md:text-2xl font-serif">
                      Maybe you're just my favorite kind of problem. ❤️
                    </p>
                  </div>

                </div>
              )}

            </div>
          )}

        </div>
      </section>
    </>
  );
}