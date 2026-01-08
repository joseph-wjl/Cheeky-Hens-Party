"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "../../components/Reveal";

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
          <Reveal>
            <h2 className="text-6xl sm:text-7xl font-bold mb-4 text-white">
              Cheeky Butler
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-lg sm:text-2xl mb-8 sm:mb-12 text-white">
              Because sometimes, the best accessory to a glass of bubbles... is a six-pack!
            </p>
          </Reveal>

          <Reveal delay={300}>
            <a
              href="/booking"
              className="px-8 sm:px-15 py-3 text-white border border-white hover:text-black hover:border-black transition inline-block"
            >
              Book Now
            </a>
          </Reveal>
        </div>
      </section>

      {/* DETAILS */}
      <section className="px-6 py-10 bg-[#FEEFEC]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#82310e] mt-6 mb-10">
              Create the Ultimate Hen Party
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mb-10">
              Our Hunky Male Topless Waiters are the ultimate mix of eye candy, cheeky charm, and five-star service. From greeting your guests to topping up drinks, and making sure the bride feels like a queen, they'll keep the party buzzing all night.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="font-semibold mb-10">
              PRICE: $2,000 for 2 hours (additional hours available)
            </p>
          </Reveal>

          <Reveal delay={450}>
            <ul className="list-disc pl-6 text-left space-y-2 text-sm sm:text-base mb-6">
              <li>Professional, handsome male topless butler, charming, fun and ready to serve</li>
              <li>2 hours of service (option to extend)</li>
              <li>Drink service, you supply the booze, they bring the vibe</li>
              <li>Opportunity for the butler to be involved in games</li>
              <li>Fun photo opportunities with your butler</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="px-6 py-10 bg-[#FFDED6]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#82310e]">
              Why Hire A Cheeky Butler?
            </h2>
          </Reveal>

          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            {[1, 2, 3].map((n, i) => (
              <Reveal key={n} delay={i * 150}>
                <div className="flex flex-col items-center max-w-xs">
                  <img
                    src={`/images/butler/butler${n}${n === 3 ? ".png" : ".jpg"}`}
                    alt="Professional service"
                    className="w-60 h-60 object-cover rounded-full mb-4"
                  />
                  <p className="text-[#82310e]">
                    {n === 1 && "Stress free hosting, drinks topped up, photos taken, guest entertained."}
                    {n === 2 && "Fun, flirty atmosphere, perfect ice-breakers and instant party vibes."}
                    {n === 3 && "Perfect for hen parties, girls night, birthday parties, and more!"}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-12">
              <a
                href="/booking"
                className="px-8 sm:px-12 py-3 bg-[#82310e] text-white hover:bg-[#6f1c0b] transition inline-block"
              >
                Book A Cheeky Butler
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <Reveal>
        <div
          className="relative w-full min-h-[300px] sm:min-h-[400px] bg-cover bg-center"
          style={{ backgroundImage: "url(/images/butler/glass.avif)" }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </Reveal>

      {/* FAQ */}
      <section className="bg-[#FEEFEC] px-6 pb-10">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl py-12 text-center text-[#6f1c0b]">
              Frequently Asked Questions
            </h2>
          </Reveal>

          {questions.map((qa, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="border-b pb-4 mb-4">
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
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
