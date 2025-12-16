"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/gallery/gallery1.png",
    caption: "Cheeky hens night life drawing session",
  },
  {
    src: "/images/gallery/gallery2.png",
    caption: "Private hen party with live male model",
  },
  {
    src: "/images/gallery/3.jpg",
    caption: "Laughs, prosecco, and art",
  },
  {
    src: "/images/gallery/4.jpg",
    caption: "Bold poses & unforgettable memories",
  },
  {
    src: "/images/gallery/5.jpg",
    caption: "Classic life drawing with a cheeky twist",
  },
  {
    src: "/images/gallery/6.jpg",
    caption: "The ultimate hens party experience",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const open = (index) => setCurrentIndex(index);
  const close = () => setCurrentIndex(null);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  /* Keyboard controls */
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  /* Swipe gestures */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (delta > 50) next();
    if (delta < -50) prev();
  };

  return (
    <>
      {/* Header */}
      <div className="px-6 py-20 bg-[#FEEFEC] text-center text-[#82310e]">
        <h1 className="text-5xl sm:text-6xl font-bold mb-10">Gallery</h1>
        <p>Click any image to explore our cheeky hen party moments.</p>
      </div>

      {/* Grid */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => open(i)}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover hover:scale-105 transition"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full text-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute -top-12 right-0 text-white text-4xl"
            >
              &times;
            </button>

            {/* Image */}
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].caption}
              width={1600}
              height={1000}
              className="w-full h-auto rounded-lg"
            />

            {/* Caption */}
            <p className="mt-4 text-white text-lg">
              {images[currentIndex].caption}
            </p>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-5xl px-4"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-5xl px-4"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
