"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CheekyButler() {

const questions = [
  {
    q: "What does a male Cheeky Butler do?",
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
    a: "Yes, you're welcome to take photos and videos of the butler and your group. We encourage you to capture the fun moments!",
  },
  {
    q: "Can we touch the butler?",
    a: "A little cheeky fun is part of the experience and our butlers are usually happy to play along! Their job is to entertain you after all 😉 Just make sure you ask first, and always respect their comfort level.",
  },
];

const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section 
        className="px-6 py-20 text-left min-h-screen flex flex-col justify-center items-center bg-cover 
        bg-center bg-bottom bg-no-repeat relative"
        style={{ backgroundImage: 'url(/images/butler/hero.jpg)' }} id="hero"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 pr-50">
          <h2 className="text-7xl font-bold mb-4 text-white">
           Cheeky <br></br>
          Butler Service
          </h2>
          <p className="text-2xl mb-12 text-white">
            Because sometimes, the best accessory to a glass of bubbles... is a six-pack!
          </p>

          <a
            href="/booking"
            className="px-15 py-3 text-white border border-white hover:text-black hover:border-black transition"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[#82310e]">Cheeky Butler Package</h2>
          <p className="text-lg mb-4 text-gray-700">
            Add a cheeky twist to your celebration! Our professional male butler will entertain your group 
            with charm, humor, and fun while serving drinks and keeping the party energy high.
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#82310e]">What's Included</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Professional cheeky butler entertainment</li>
            <li>Drink service throughout the event</li>
            <li>Games and fun interactions</li>
            <li>Customizable duration (2, 2.5, or 3 hours)</li>
            <li>Tailored entertainment to your group's vibe</li>
            <li>Memorable moments and lots of laughs!</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#82310e]">Pricing</h3>
          <p className="text-lg text-gray-700">
            Starting from <strong>$350 per person</strong> (minimum 10 guests, $3,500 total)
          </p>

          <div className="mt-10 text-center">
            <a
              href="/booking"
              className="px-12 py-3 bg-[#82310e] text-white hover:bg-[#6f1c0b] transition"
            >
              Book Your Butler
            </a>
          </div>
        </div>
      </section> */}

{/* Details Section */}
      <section className="px-6 py-10 bg-[#FEEFEC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#82310e]">Create the Ultimate Hen Party</h2>
          <p className="text-base sm:text-lg mb-4">
            Our Hunky Male Topless Waiters are the ultimate mix of eye candy, cheeky charm, and five-star service. From greeting your guests to topping up drinks, and making sure the bride feels like a queen, they'll keep the party buzzing all night.
          </p>
          <p className="text-base sm:text-lg mb-6">
            PRICE: $2,000 for 2 hours of service (Additional hours available)
          </p>

          <p className="font-bold text-left">What's included:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-left text-sm sm:text-base">
            <li>Professional, handsome male topless butler, charming, fun and ready to serve</li>
            <li>2 hours of service (option to extend)​</li>
            <li>Drink service, you supply the booze, they bring the vibe</li>
            <li>Opportunity for the Waiter to be involved in games</li>
            <li>Fun photo opportunities with your hunky butler</li>
          </ul>

        </div>
      </section>

{/* Why Section */}
<section className="px-6 py-10 bg-[#FFDED6]">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#82310e]">
      Why Hire A Cheeky Butler?
    </h2>

    {/* Image + Text Row */}
    <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
      
      {/* Item 1 */}
      <div className="flex flex-col items-center max-w-xs">
        <img
          src="/images/butler/butler1.jpg"
          alt="Professional service"
          className="w-60 h-60 object-cover rounded-full mb-4"
        />
        <p className="text-[#82310e]">
          Fun, professional, and unforgettable entertainment tailored to your event.
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center max-w-xs">
        <img
          src="/images/butler/butler2.jpg"
          alt="Memorable events"
          className="w-60 h-60 object-cover rounded-full mb-4"
        />
        <p className="text-[#82310e]">
          Perfect for hens parties, birthdays, and private celebrations.
        </p>
      </div>

      {/* Item 3 */}
      <div className="flex flex-col items-center max-w-xs">
        <img
          src="/images/butler/butler3.png"
          alt="Cheeky fun"
          className="w-60 h-60 object-cover rounded-full mb-4"
        />
        <p className="text-[#82310e]">
          A cheeky experience that keeps things classy and fun.
        </p>
      </div>

    </div>

    {/* Booking Button */}
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

{/* Glass Image Section */}
      <div 
        className="relative w-full flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px]"
        style={{ backgroundImage: 'url(/images/butler/glass.avif)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/10"></div>
      </div>

{/* Questions Section */}

      <section
            id="questions"
            className="text-center bg-[#FEEFEC] pb-10 px-6"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl pt-12 pb-10 text-[#6f1c0b]">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4 text-left">
                {questions.map((qa, i) => (
                  <div
                    key={i}
                    className="border-b border-[#e4b9ae] pb-4"
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex justify-between items-center text-left "
                      
                    >
                      <h3 className="text-xl sm:text-2xl text-[#6f1c0b] font-bold">
                        {qa.q}
                      </h3>

                      <ChevronDown
                        className={`w-6 h-6 text-[#6f1c0b] transition-transform duration-500 ${
                          openIndex === i ? "rotate-180" : ""
                        }`}
                      />

                    </button>

                    {openIndex === i && (
                      <p className="mt-3 text-[#6f1c0b] whitespace-pre-line animate-fade">
                        {qa.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
    </>
  );
}
