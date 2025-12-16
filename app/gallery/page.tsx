"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  caption: string;
};

const images: GalleryImage[] = [
  {
    src: "/images/gallery/gallery1.JPG",
    caption: "Cheeky hens night life drawing session",
  },
  {
    src: "/images/gallery/gallery2.png",
    caption: "Private hen party with live male model",
  },
  {
    src: "/images/gallery/3.png",
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

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const open = (index: number) => setCurrentIndex(index);
  const close = () => setCurrentIndex(null);

  const prev = () =>
    setCurrentIndex((i) =>
      i === null ? 0 : i === 0 ? images.length - 1 : i - 1
    );

  const next = () =>
    setCurrentIndex((i) =>
      i === null ? 0 : i === images.length - 1 ? 0 : i + 1
    );

  /* Keyboard controls */
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  /* Swipe gestures */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
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
        <p className="mb-5">Click any image to explore our cheeky hen party moments.</p>
        <p> Follow us on Facebook or Instagram to keep up with all our fun and sexy art classes and check out our hot talent. </p>
      </div>

      {/* Gallery Grid */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => open(i)}
              className="relative aspect-square overflow-hidden rounded-lg focus:outline-none"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
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
            className="relative w-full max-w-5xl mx-auto text-center px-12 group"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 text-white text-4xl z-20 opacity-80 hover:opacity-100 transition"
              aria-label="Close gallery"
            >
              &times;
            </button>

            {/* Image with animation */}
            <div className="overflow-hidden rounded-lg">
              <div key={currentIndex} className="animate-slide">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].caption}
                  width={1600}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Caption */}
            <p className="mt-4 text-white text-lg">
              {images[currentIndex].caption}
            </p>

            {/* Left arrow (desktop only) */}
            <button
              onClick={prev}
              className="
                absolute left-2 sm:left-6 top-1/2 -translate-y-1/2
                text-white text-5xl z-10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                hidden sm:block
              "
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Right arrow (desktop only) */}
            <button
              onClick={next}
              className="
                absolute right-2 sm:right-6 top-1/2 -translate-y-1/2
                text-white text-5xl z-10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                hidden sm:block
              "
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
