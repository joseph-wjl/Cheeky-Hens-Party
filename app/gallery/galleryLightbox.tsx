"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";

type GalleryImage = {
  image: any;
  caption: string;
};

type Props = {
  images: GalleryImage[];
};

export default function GalleryLightbox({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

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

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            className="relative aspect-square overflow-hidden focus:outline-none"
            onClick={() => open(i)}
          >
            {img.image && (
              <Image
                src={urlFor(img.image).url()}
                alt={img.caption || "Gallery image"}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            )}
          </button>
        ))}
      </div>

      {currentIndex !== null && images[currentIndex]?.image && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl mx-auto text-center px-12 group"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-white text-4xl z-20 opacity-80 hover:opacity-100 transition"
              aria-label="Close gallery"
            >
              &times;
            </button>

            <Image
              src={urlFor(images[currentIndex].image).url()}
              alt={images[currentIndex].caption || "Gallery image"}
              width={1600}
              height={1000}
              className="w-full h-auto"
              priority
            />

            <p className="mt-4 text-white text-lg">
              {images[currentIndex].caption}
            </p>

            <button
              onClick={prev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white text-5xl z-10"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white text-5xl z-10"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
