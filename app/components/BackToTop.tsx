"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-[80]
        w-12 h-12 rounded-full
        bg-[#6f1c0b] text-[#F3A6B6]
        flex items-center justify-center
        shadow-lg
        transition-all duration-300 ease-out
        hover:scale-110 hover:bg-[#8a2a16]
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      {/* simple symbol */}
      <span className="text-xl leading-none">↑</span>
    </button>
  );
}
