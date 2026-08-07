"use client";

import { useEffect, useState } from "react";

export default function Stars() {
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 80 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <span
          key={star}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}