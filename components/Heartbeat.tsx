"use client";

import { useEffect, useState } from "react";

export default function Heartbeat() {
  const [started, setStarted] = useState(false);
  const [beat, setBeat] = useState(false);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setBeat(true);

      setTimeout(() => {
        setBeat(false);
      }, 220);
    }, 900);

    return () => clearInterval(interval);
  }, [started]);

  const hearts = Array.from({ length: 18 });

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-28 overflow-hidden">

      {/* Falling Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((_, i) => (
          <div
            key={i}
            className="absolute -top-10 text-red-500 text-lg md:text-xl animate-[fallHeart_7s_linear_infinite]"
            style={{
              left: `${(i * 37) % 100}%`,
              animationDelay: `${i * 0.45}s`,
              opacity: 0.75,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-500/5 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl text-center">

        {!started ? (
          <div className="animate-[fadeIn_0.8s_ease-out]">

            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-white/40 mb-5">
              Just one little thing...
            </p>

            <h2 className="text-4xl md:text-6xl font-serif text-white">
              Listen to My Heart ❤️
            </h2>

            <p className="mt-5 text-white/60 max-w-md mx-auto">
              There is something I wanted you to hear.
            </p>

            <button
              onClick={() => setStarted(true)}
              className="mt-10 px-8 py-4 rounded-full border border-white/20 bg-white/[0.03] text-white transition-all duration-300 hover:scale-105 hover:bg-white/[0.08] hover:border-white/40 hover:shadow-xl"
            >
              Listen ❤️
            </button>

          </div>
        ) : (
          <div className="animate-[fadeIn_0.8s_ease-out]">

            {/* Beating Heart */}
            <div
              className={`text-8xl md:text-9xl select-none transition-transform duration-200 ${
                beat ? "scale-125" : "scale-100"
              }`}
            >
              ❤️
            </div>

            {/* ECG */}
            <div className="relative mt-12 w-full max-w-xl mx-auto h-28 overflow-hidden">

              <svg
                viewBox="0 0 800 100"
                preserveAspectRatio="none"
                className="absolute top-0 left-0 w-[200%] h-full animate-[ecgMove_2s_linear_infinite]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 50 L70 50 L90 50 L105 50 L120 20 L135 80 L150 35 L165 65 L180 50 L250 50 M400 50 L470 50 L490 50 L505 50 L520 20 L535 80 L550 35 L565 65 L580 50 L650 50"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                />
              </svg>

            </div>

            {/* Text */}
            <p className="mt-10 text-lg md:text-xl text-white/70">
              Every heartbeat has a little reminder of you. ❤️
            </p>

            <p className="mt-5 text-2xl md:text-3xl font-serif text-white">
              You are special to me, My darling Minal.
            </p>

            <p className="mt-6 text-sm text-white/40">
              Always have been. Always will be. ❤️
            </p>

          </div>
        )}

      </div>

      {/* Animations */}
      <style jsx>{`@keyframes fallHeart {
  0% {
    transform: translateY(110vh) rotate(0deg);
    opacity: 0;
  }

  10% {
    opacity: 0.75;
  }

  90% {
    opacity: 0.75;
  }

  100% {
    transform: translateY(-20vh) rotate(30deg);
    opacity: 0;
  }
}
        
        

        @keyframes ecgMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
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