"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CheekyButler() {
  const questions = [
    {
      q: "What does a Cheeky Butler do?",
      a: "He serves drinks, entertains guests, can participate in games, helps with photos, and keeps the fun flowing, all while shirtless and looking fine.",
    },
    {
      q: "What will the butler wear?",
      a: "Our Cheeky Butler typically wears nothing but an apron and bow tie — confident, cheeky, and tasteful. If you’re after something a little more daring, you can request your butler to be fully nude!",
    },
    {
      q: "Do you provide the drinks?",
      a: "No, you supply the alcohol and glassware. Your waiter serves drinks or food and keeps the glasses topped up.",
    },
    {
      q: "How many butlers should I book for my party?",
      a: "One butler is great for small to medium-sized groups (up to 20). For larger parties, we recommend two or more to keep the service smooth and the vibes extra cheeky.",
    },
    {
      q: "Can we take photos or videos?",
      a: "Yes, you're welcome to take photos and videos of the butler and your group.",
    },
    {
      q: "Can we touch the butler?",
      a: "A little cheeky fun is part of the experience — just ask first and always respect their comfort level 😉",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>

      {/* Hero Section */}
      <section 
        id="hero"
        className="
          px-4 sm:px-6
          py-12 sm:py-20
          text-left
          min-h-[70vh] sm:min-h-screen
          flex flex-col justify-center items-center
          bg-cover
          bg-no-repeat
          relative
          bg-[position:53%_20%] sm:bg-right
        "
        style={{ backgroundImage: "url(/images/butler/hero.jpg)" }}
      >

      {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
        <div className="relative z-10 max-w-md sm:max-w-none text-left sm:text-left sm:pr-50">
          <h2 className="text-6xl sm:text-7xl font-bold mb-4 text-white">
            Cheeky Butler
          </h2>

          <p className="text-lg sm:text-2xl mb-8 sm:mb-12 text-white">
            Because sometimes, the best accessory to a glass of bubbles... is a six-pack!
          </p>

          <a
            href="/booking"
            className="px-8 sm:px-15 py-3 text-white border border-white hover:text-black hover:border-black transition inline-block"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* DETAILS */}
      <section className="px-6 py-10 bg-[#FEEFEC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#82310e]">
            Create the Ultimate Hen Party
          </h2>

          <p className="mb-4">
            Our hunky male butlers bring cheeky charm, five-star service, and unforgettable fun.
          </p>

          <p className="font-semibold mb-6">
            PRICE: $2,000 for 2 hours (additional hours available)
          </p>

          <ul className="list-disc pl-6 text-left space-y-2 text-sm sm:text-base">
            <li>Professional, handsome male butler</li>
            <li>2 hours of service (option to extend)</li>
            <li>Drink service — you supply the booze</li>
            <li>Games & fun interactions</li>
            <li>Photo opportunities</li>
          </ul>
        </div>
      </section>

      {/* WHY SECTION (HARD-CODED) */}
      <section className="px-6 py-10 bg-[#FFDED6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#82310e]">
            Why Hire A Cheeky Butler?
          </h2>

          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="flex flex-col items-center max-w-xs">
              <img
                src="/images/butler/butler1.jpg"
                alt="Professional service"
                className="w-32 h-32 sm:w-60 sm:h-60 lg:w-60 lg:h-60 object-cover rounded-full mb-4"
              />

              <p className="text-[#82310e]">
                Stress free hosting, drinks topped up, photos taken, guest entertained. 
              </p>
            </div>

            <div className="flex flex-col items-center max-w-xs">
              <img
                src="/images/butler/butler2.jpg"
                alt="Professional service"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 object-cover rounded-full mb-4"
              />
              <p className="text-[#82310e]">
                Fun, flirty atmosphere, perfect ice-breakers and instant party vibes.
              </p>
            </div>

            <div className="flex flex-col items-center max-w-xs">
              <img
                src="/images/butler/butler3.png"
                alt="Professional service"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 object-cover rounded-full mb-4"
              />
              <p className="text-[#82310e]">
                Perfect for hens parties, girls night, divorce parties, birthday parties. Any event that needs a cheeky topless twist.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/booking"
              className="px-8 sm:px-12 py-3 bg-[#82310e] text-white hover:bg-[#6f1c0b] transition inline-block"
            >
              Book A Cheeky Butler
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <div
        className="relative w-full min-h-[300px] sm:min-h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/butler/glass.avif)" }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* FAQ */}
      <section className="bg-[#FEEFEC] px-6 pb-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl py-12 text-center text-[#6f1c0b]">
            Frequently Asked Questions
          </h2>

          {questions.map((qa, i) => (
            <div key={i} className="border-b pb-4 mb-4">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg sm:text-2xl font-bold text-[#6f1c0b]">
                  {qa.q}
                </h3>
                <ChevronDown
                  className={`transition ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <p className="mt-3 animate-fade text-[#6f1c0b]">
                  {qa.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
